import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  constructor(private localStorage: LocalStorageService) {}

  isAdmin = this.localStorage.getItem('adminLoggedIn');

  logout(event: Event) {
    this.isAdmin = false;
    this.localStorage.removeItem('adminLoggedIn');
    window.location.href = 'http://localhost:4200/login';
  }
}
