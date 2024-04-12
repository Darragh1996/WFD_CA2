import { Component } from '@angular/core';
import { ResultsService } from '../results.service';
import { Result } from '../result';
import { Ranking } from '../ranking';
import { TeamStats } from '../team-stats';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
})
export class TablesComponent {
  results: Result[] = [];
  rankingsData: Ranking = {};
  finalRankings: TeamStats[] = [];

  constructor(private resultsService: ResultsService) {
    this.resultsService.getResults().subscribe((response) => {
      this.results = response;

      // I realise this for loop is a bit ridiculous but
      // I wanted to try have all the teams ranked in a single
      // for loop
      for (let i = 0; i < this.results.length; i++) {
        let team1TotalPoints =
          this.results[i].team1Goals * 3 + this.results[i].team1Points;
        let team2TotalPoints =
          this.results[i].team2Goals * 3 + this.results[i].team2Points;

        if (this.rankingsData.hasOwnProperty(this.results[i].team1)) {
          // if this team already exists then just update the values
          this.rankingsData[this.results[i].team1] = {
            team: this.results[i].team1,
            played: this.rankingsData[this.results[i].team1].played + 1,
            wins:
              team1TotalPoints > team2TotalPoints
                ? this.rankingsData[this.results[i].team1].wins + 1
                : this.rankingsData[this.results[i].team1].wins,
            draws:
              team1TotalPoints == team2TotalPoints
                ? this.rankingsData[this.results[i].team1].draws + 1
                : this.rankingsData[this.results[i].team1].draws,
            losses:
              team1TotalPoints < team2TotalPoints
                ? this.rankingsData[this.results[i].team1].losses + 1
                : this.rankingsData[this.results[i].team1].losses,
            difference:
              this.rankingsData[this.results[i].team1].difference +
              (team1TotalPoints - team2TotalPoints),
            points:
              team1TotalPoints > team2TotalPoints
                ? this.rankingsData[this.results[i].team1].points + 2
                : team1TotalPoints == team2TotalPoints
                ? this.rankingsData[this.results[i].team1].points + 1
                : this.rankingsData[this.results[i].team1].points,
          };
        } else {
          // else first time encountering this team so
          // initialise values properly
          this.rankingsData[this.results[i].team1] = {
            team: this.results[i].team1,
            played: 1,
            wins: team1TotalPoints > team2TotalPoints ? 1 : 0,
            draws: team1TotalPoints == team2TotalPoints ? 1 : 0,
            losses: team1TotalPoints < team2TotalPoints ? 1 : 0,
            difference: team1TotalPoints - team2TotalPoints,
            points:
              team1TotalPoints > team2TotalPoints
                ? 2
                : team1TotalPoints == team2TotalPoints
                ? 1
                : 0,
          };
        }

        if (this.rankingsData.hasOwnProperty(this.results[i].team2)) {
          this.rankingsData[this.results[i].team2] = {
            team: this.results[i].team2,
            played: this.rankingsData[this.results[i].team2].played + 1,
            wins:
              team2TotalPoints > team1TotalPoints
                ? this.rankingsData[this.results[i].team2].wins + 1
                : this.rankingsData[this.results[i].team2].wins,
            draws:
              team1TotalPoints == team2TotalPoints
                ? this.rankingsData[this.results[i].team2].draws + 1
                : this.rankingsData[this.results[i].team2].draws,
            losses:
              team2TotalPoints < team1TotalPoints
                ? this.rankingsData[this.results[i].team2].losses + 1
                : this.rankingsData[this.results[i].team2].losses,
            difference:
              this.rankingsData[this.results[i].team2].difference +
              (team2TotalPoints - team1TotalPoints),
            points:
              team2TotalPoints > team1TotalPoints
                ? this.rankingsData[this.results[i].team2].points + 2
                : team1TotalPoints == team2TotalPoints
                ? this.rankingsData[this.results[i].team2].points + 1
                : this.rankingsData[this.results[i].team2].points,
          };
        } else {
          this.rankingsData[this.results[i].team2] = {
            team: this.results[i].team2,
            played: 1,
            wins: team2TotalPoints > team1TotalPoints ? 1 : 0,
            draws: team2TotalPoints == team1TotalPoints ? 1 : 0,
            losses: team2TotalPoints < team1TotalPoints ? 1 : 0,
            difference: team2TotalPoints - team1TotalPoints,
            points:
              team2TotalPoints > team1TotalPoints
                ? 2
                : team1TotalPoints == team2TotalPoints
                ? 1
                : 0,
          };
        }
      }

      this.finalRankings = Object.values(this.rankingsData);
      this.finalRankings.sort((team1, team2) => {
        if (team1.wins !== team2.wins) {
          return team2.wins - team1.wins;
        }

        if (team1.draws !== team2.draws) {
          return team2.draws - team1.draws;
        }

        return team2.points - team1.points;
      });
    });
  }
}
