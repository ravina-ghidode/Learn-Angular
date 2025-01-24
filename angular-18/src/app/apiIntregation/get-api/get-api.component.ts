import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../reusable-component/alert/alert.component';
import { MyButtonComponent } from '../../reusable-component/my-button/my-button.component';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent, MyButtonComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: any[] = [];
  // http = inject(HttpClient);
  constructor(private http: HttpClient) {

  }
  getAllUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
      this.userList = res;
    });
  }
}
