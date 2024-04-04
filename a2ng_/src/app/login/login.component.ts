import { Component } from '@angular/core';

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

  onKeyUp(event: Event) {
    console.log((event.target as HTMLSelectElement).id);
    if ((event.target as HTMLSelectElement).id == 'email') {
      this.email = (event.target as HTMLSelectElement).value;
    } else if ((event.target as HTMLSelectElement).id == 'password') {
      this.password = (event.target as HTMLSelectElement).value;
    }
  }

  onSubmit() {}
}
