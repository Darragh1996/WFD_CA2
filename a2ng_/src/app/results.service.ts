import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from './result';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  resultsURL = 'http://localhost:3000/results/';

  constructor(private http: HttpClient) {}

  // getTeams here
  getResults(): Observable<Result[]> {
    return this.http.get<Result[]>(this.resultsURL);
  }

  updateResult(id: number, scores: Object) {
    return this.http.patch(this.resultsURL + id, scores);
  }

  deleteResult(id: number) {
    return this.http.delete(this.resultsURL + id);
  }

  getRounds(): Observable<String[]> {
    return this.http.get<String[]>(this.resultsURL + 'rounds');
  }
}
