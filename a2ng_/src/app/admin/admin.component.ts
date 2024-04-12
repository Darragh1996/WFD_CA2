import { Component } from '@angular/core';
import { ResultsService } from '../results.service';
import { Result } from '../result';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  results: Result[] = [];
  displayResults: Result[] = [];
  rounds: String[] = [];

  constructor(private resultsService: ResultsService) {
    this.resultsService.getResults().subscribe((response) => {
      this.results = response;
      this.displayResults = response.filter((result) => {
        return String(result.round) == '1';
      });
    });
    this.resultsService.getRounds().subscribe((response) => {
      this.rounds = response;
    });
  }

  update(result: Result) {
    let { id, team1Score, team2Score } = result;
    this.resultsService
      .updateResult(id, { score1: team1Score, score2: team2Score })
      .subscribe((response) => {
        console.log(response);
      });
  }

  onChange(event: Event) {
    this.displayResults = this.results.filter((result) => {
      return String(result.round) == (event.target as HTMLSelectElement).value;
    });
  }
}
