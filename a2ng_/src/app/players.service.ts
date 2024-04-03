import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  teamURL = 'http://localhost:3000/players/';

  constructor(private http: HttpClient) {}

  // getTeams here
  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.teamURL);
  }
}
