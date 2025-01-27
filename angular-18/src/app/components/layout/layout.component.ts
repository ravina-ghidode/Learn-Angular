import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  router = inject(Router);
  loggedUserData: any;
  constructor() {
    const loggedInData = localStorage.getItem('LoginUser');
    if (loggedInData != null) {
      this.loggedUserData = JSON.parse(loggedInData);
    }

  }
  logOut() {
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('login');
  }
}
