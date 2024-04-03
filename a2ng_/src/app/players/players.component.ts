import { Component } from '@angular/core';
import { PlayersService } from '../players.service';
import { TeamsService } from '../teams.service';
import { Player } from '../player';
import { Team } from '../team';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css',
})
export class PlayersComponent {
  players: Player[] = [];
  displayPlayers: Player[] = [];
  teams: Team[] = [];

  constructor(
    private playersService: PlayersService,
    private teamsService: TeamsService
  ) {
    this.playersService.getPlayers().subscribe((response) => {
      this.players = response;
      this.displayPlayers = response;
    });

    this.teamsService.getTeams().subscribe((response) => {
      this.teams = response;
    });
  }

  onChange(event: Event) {
    if ((event.target as HTMLSelectElement).value == 'All') {
      this.displayPlayers = this.players;
    } else {
      this.displayPlayers = this.players.filter((player) => {
        return player.teamName == (event.target as HTMLSelectElement).value;
      });
    }
  }
}
