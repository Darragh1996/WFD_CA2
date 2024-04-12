import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = '';
  password = '';
  loginURL = 'http://localhost:3000/login';

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  onKeyUp(event: Event) {
    if ((event.target as HTMLSelectElement).id == 'email') {
      this.email = (event.target as HTMLSelectElement).value;
    } else if ((event.target as HTMLSelectElement).id == 'password') {
      this.password = (event.target as HTMLSelectElement).value;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.http
      .post(
        this.loginURL,
        { email: this.email, password: this.password },
        { observe: 'response' }
      )
      .subscribe((response) => {
        if (response.status == 200) {
          console.log('login successful');
          this.localStorage.setItem('adminLoggedIn', true);
          window.location.href = 'http://localhost:4200/admin';
        } else {
          console.log('login failed');
        }
      });
  }
}
