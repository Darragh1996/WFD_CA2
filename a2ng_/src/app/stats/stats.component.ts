import { Component } from '@angular/core';
import { ResultsService } from '../results.service';
import { TeamsService } from '../teams.service';
import { Result } from '../result';
import { Team } from '../team';
import * as d3 from 'd3';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
})
export class StatsComponent {
  results: Result[] = [];
  displayResult: Result[] = [];
  teams: Team[] = [];
  currSelectedTeam: String = '';

  svg: any;
  margin = 50;
  width = 500 - this.margin * 2;
  height = 400 - this.margin * 2;

  constructor(
    private resultsService: ResultsService,
    private teamsService: TeamsService
  ) {
    this.teamsService.getTeams().subscribe((response) => {
      this.teams = response;
      this.createBarChart(this.results);
    });
    this.resultsService.getResults().subscribe((response) => {
      this.results = response;
      this.displayResult = response.filter((result) => {
        return (
          result.team1 == this.currSelectedTeam ||
          result.team2 == this.currSelectedTeam
        );
      });
      // this.createBarChart(this.displayResult);
    });
  }

  createBarChart(data: Result[]) {
    this.svg = d3
      .select('.barChart')
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')')
      .style('border', '1px solid black');

    this.svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', this.margin / 2 - 70) // Adjust y position to avoid overlap
      .attr('x', -this.height / 2) // Center the label vertically
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .text('Total Points');

    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(
        data.map(
          (d) =>
            'Rd ' +
            d.round +
            ' vs ' +
            (d.team1 === this.currSelectedTeam ? d.team2 : d.team1)
        )
      )
      .padding(0.2);

    this.svg
      .append('g')
      .attr('transform', `translate(0, ${this.height})`)
      .call(d3.axisTop(x))
      .selectAll('text')
      .attr('transform', 'translate(0,-300)')
      .style('text-anchor', 'middle')
      .attr('dy', '-0.5em')
      .attr('dx', '0em');

    const y = d3.scaleLinear().domain([0, 30]).range([this.height, 0]);

    this.svg.append('g').call(d3.axisLeft(y));

    const barWidth = x.bandwidth() / 2;

    this.results.forEach((d) => {
      const xValue = x(
        'Rd ' +
          d.round +
          ' vs ' +
          (d.team1 === this.currSelectedTeam ? d.team2 : d.team1)
      );

      // this is a work around for an error I was getting
      // I was getting an error saying 'Object possible undefined'
      // so this checks if its undefined before doing anything else
      if (xValue !== undefined) {
        // bar for selected team
        this.svg
          .append('rect')
          .attr('x', xValue)
          .attr(
            'y',
            y(
              d.team1 === this.currSelectedTeam
                ? d.team1Goals * 3 + d.team1Points
                : d.team2Goals * 3 + d.team2Points
            )
          )
          .attr('width', barWidth)
          .attr(
            'height',
            this.height -
              y(
                // calculates total points
                d.team1 === this.currSelectedTeam
                  ? d.team1Goals * 3 + d.team1Points
                  : d.team2Goals * 3 + d.team2Points
              )
          )
          .attr('fill', 'blue');

        this.svg
          .append('text')
          .attr('x', xValue + barWidth / 2)
          .attr(
            'y',
            y(
              d.team1 === this.currSelectedTeam
                ? d.team1Goals * 3 + d.team1Points
                : d.team2Goals * 3 + d.team2Points
            ) + 20
          )
          .attr('text-anchor', 'middle')
          .attr('fill', 'white')
          .text(
            d.team1 === this.currSelectedTeam ? d.team1Score : d.team2Score
          );

        // bar for opposing team
        this.svg
          .append('rect')
          .attr('x', xValue + barWidth)
          .attr(
            'y',
            y(
              // calculates total points
              d.team1 !== this.currSelectedTeam
                ? d.team1Goals * 3 + d.team1Points
                : d.team2Goals * 3 + d.team2Points
            )
          )
          .attr('width', barWidth)
          .attr(
            'height',
            this.height -
              y(
                d.team1 !== this.currSelectedTeam
                  ? d.team1Goals * 3 + d.team1Points
                  : d.team2Goals * 3 + d.team2Points
              )
          )
          .attr('fill', 'red');

        this.svg
          .append('text')
          .attr('x', xValue + barWidth * (3 / 2))
          .attr(
            'y',
            y(
              d.team1 === this.currSelectedTeam
                ? d.team2Goals * 3 + d.team2Points
                : d.team1Goals * 3 + d.team1Points
            ) + 20
          )
          .attr('text-anchor', 'middle')
          .attr('fill', 'white')
          .text(
            d.team1 === this.currSelectedTeam ? d.team2Score : d.team1Score
          );
      }
    });
  }

  onChange(event: Event) {
    if ((event.target as HTMLSelectElement).value == 'Select a team...') {
      this.currSelectedTeam = '';
    } else {
      this.currSelectedTeam = (event.target as HTMLSelectElement).value;
      this.displayResult = this.results.filter((result) => {
        return (
          result.team1 == this.currSelectedTeam ||
          result.team2 == this.currSelectedTeam
        );
      });
      let container = document.getElementsByClassName('barChart')[0];
      container.innerHTML = ''; // clears any remaining elements in container
      this.createBarChart(this.displayResult);
    }
  }
}
