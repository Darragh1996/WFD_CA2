import { Component } from '@angular/core';
import { TeamsService } from '../teams.service';
import { Team } from '../team';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css',
})
export class TeamsComponent {
  teams: Team[] = [];

  constructor(private teamsService: TeamsService) {
    this.teamsService.getTeams().subscribe((response) => {
      this.teams = response;
      console.log(response);
    });
  }
}
