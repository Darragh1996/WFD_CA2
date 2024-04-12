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

  constructor(private resultsService: ResultsService) {
    this.resultsService.getResults().subscribe((response) => {
      this.results = response;
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
}
