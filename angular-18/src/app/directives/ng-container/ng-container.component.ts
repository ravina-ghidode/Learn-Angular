import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { IUser } from '../../models/interfaces/IUser';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgCOntainerComponent {
  isContainer: boolean = true;
  userList: IUser[] = [];
  isApi: boolean = false
  http = inject(HttpClient);
  getUsers() {
    this.isApi = true;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      this.userList = res;
      this.isApi = false;
    })
  }
}
