import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from './result';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  teamURL = 'http://localhost:3000/results/';

  constructor(private http: HttpClient) {}

  // getTeams here
  getResults(): Observable<Result[]> {
    return this.http.get<Result[]>(this.teamURL);
  }

  updateResult(id: number, scores: Object) {
    return this.http.patch(this.teamURL + id, scores);
  }
}
