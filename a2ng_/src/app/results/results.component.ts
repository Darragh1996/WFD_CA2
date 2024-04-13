import { Component } from '@angular/core';
import { ResultsService } from '../results.service';
import { Result } from '../result';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  results: Result[] = [];
  displayResults: Result[] = [];
  rounds: String[] = [];
  currRoundIndex: number = 0;

  constructor(private resultsService: ResultsService) {
    this.resultsService.getResults().subscribe((response) => {
      this.results = response;
      this.displayResults = response.filter((result) => {
        return result.round == 1;
      });
    });
    this.resultsService.getRounds().subscribe((response) => {
      this.rounds = response;
    });
  }

  onClick(val: number) {
    this.currRoundIndex = (this.currRoundIndex + val) % this.rounds.length;
    if (this.currRoundIndex < 0) {
      // to make sure it stays in range of the array
      this.currRoundIndex = this.rounds.length - 1;
    }

    this.displayResults = this.results.filter((result) => {
      return result.round == Number(this.rounds[this.currRoundIndex]);
    });
  }

  onKeyUp(event: Event) {
    this.displayResults = this.results.filter((result) => {
      return (
        (result.team1
          .toUpperCase()
          .includes((event.target as HTMLInputElement).value.toUpperCase()) ||
          result.team2
            .toUpperCase()
            .includes(
              (event.target as HTMLInputElement).value.toUpperCase()
            )) &&
        String(result.round) == this.rounds[this.currRoundIndex]
      );
    });
  }
}
