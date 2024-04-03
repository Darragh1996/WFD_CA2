import { Component } from '@angular/core';
import { TeamsService } from '../teams.service';
import { Team } from '../team';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [UpperCasePipe],
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
