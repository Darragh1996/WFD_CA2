import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.css',
})
export class RoutesComponent {
  jsonData: Object[] = [];

  constructor(private http: HttpClient) {}

  onClick(url: string) {
    this.http.get<Object[]>(url).subscribe((response) => {
      this.jsonData = response;
    });
  }
}
