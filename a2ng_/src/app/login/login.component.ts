import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  onKeyUp(event: Event) {
    if ((event.target as HTMLSelectElement).id == 'email') {
      this.email = (event.target as HTMLSelectElement).value;
    } else if ((event.target as HTMLSelectElement).id == 'password') {
      this.password = (event.target as HTMLSelectElement).value;
    }
  }

  // onSubmit(event: Event) {
  //   event.preventDefault();
  //   this.http
  //     .post(
  //       this.loginURL,
  //       { email: this.email, password: this.password },
  //       { observe: 'response' }
  //     )
  //     .subscribe((response) => {
  //       if (response.status == 200) {
  //         console.log('login successful');
  //       } else {
  //         console.log('login failed');
  //       }
  //     });
  // }

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent default form submission behavior

    this.http
      .post(
        this.loginURL,
        { email: this.email, password: this.password },
        { observe: 'response' }
      )
      .subscribe(
        (response) => {
          // Handle successful response
          if (response.status === 200) {
            console.log('Login successful');
            // Perform actions based on successful login, e.g., navigate to another page
          } else {
            // Handle other successful responses that might not be login success
            console.log('Login failed');
          }
        },
        (error) => {
          // Handle error
          console.error('Login error:', error);
          // You can perform different actions based on the error status or type
          // For instance, showing an error message to the user
        }
      );
  }
}
