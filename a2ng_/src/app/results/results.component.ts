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
  currSearch: string = '';

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

    // this filter returns only the results that match the current select round
    // and whatever is currently typed in the team search bar
    this.displayResults = this.results.filter((result) => {
      return (
        result.round == Number(this.rounds[this.currRoundIndex]) &&
        (result.team1.toUpperCase().includes(this.currSearch.toUpperCase()) ||
          result.team2.toUpperCase().includes(this.currSearch.toUpperCase()))
      );
    });
  }

  onKeyUp(event: Event) {
    this.currSearch = (event.target as HTMLInputElement).value;
    // this filter returns only the results that match the current select round
    // and whatever is currently typed in the team search bar
    this.displayResults = this.results.filter((result) => {
      return (
        (result.team1.toUpperCase().includes(this.currSearch.toUpperCase()) ||
          result.team2.toUpperCase().includes(this.currSearch.toUpperCase())) &&
        String(result.round) == this.rounds[this.currRoundIndex]
      );
    });
  }
}
