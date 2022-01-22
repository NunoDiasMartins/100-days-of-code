import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invite } from '@kekkonshiki/api-interfaces';

@Component({
  selector: 'kekkonshiki-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hello$ = this.http.get<Invite>('/api/invite/12312');
  constructor(private http: HttpClient) {}
}
