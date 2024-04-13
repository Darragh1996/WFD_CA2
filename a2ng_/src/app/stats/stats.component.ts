import { Component } from '@angular/core';
import { ResultsService } from '../results.service';
import { Result } from '../result';
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
  height = 400;
  width = 600;
  margin = { top: 20, bottom: 30, left: 80, right: 20 };

  constructor(private resultsService: ResultsService) {
    this.resultsService.getResults().subscribe((response) => {
      this.results = response;
    });
  }
}
