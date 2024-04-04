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

  constructor(private resultsService: ResultsService) {
    this.resultsService.getResults().subscribe((response) => {
      this.results = response;
    });
  }
}
