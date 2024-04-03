import { Routes } from '@angular/router';
import { RoutesComponent } from './routes/routes.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';

export const routes: Routes = [
  { path: '', component: RoutesComponent, title: 'Routes' },
  { path: 'routes', component: RoutesComponent, title: 'Routes' },
  { path: 'teams', component: TeamsComponent, title: 'Teams' },
  { path: 'players', component: PlayersComponent, title: 'Players' },
];
