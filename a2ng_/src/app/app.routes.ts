import { Routes } from '@angular/router';
import { RoutesComponent } from './routes/routes.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { ResultsComponent } from './results/results.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { TablesComponent } from './tables/tables.component';
import { StatsComponent } from './stats/stats.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: RoutesComponent, title: 'Routes' },
  { path: 'routes', component: RoutesComponent, title: 'Routes' },
  { path: 'teams', component: TeamsComponent, title: 'Teams' },
  { path: 'players', component: PlayersComponent, title: 'Players' },
  { path: 'results', component: ResultsComponent, title: 'Results' },
  { path: 'login', component: LoginComponent, title: 'Admin Login' },
  { path: 'admin', component: AdminComponent, title: 'Admin' },
  { path: 'tables', component: TablesComponent, title: 'Tables' },
  { path: 'stats', component: StatsComponent, title: 'Stats' },
  { path: '**', component: NotFoundComponent, title: '404 Not Found' },
];
