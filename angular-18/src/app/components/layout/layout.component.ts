import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  router = inject(Router);
  loggedUserData: any;
  selectedRole: string = "";
  constructor(private common: CommonService) {
    const loggedInData = localStorage.getItem('LoginUser');
    if (loggedInData != null) {
      this.loggedUserData = JSON.parse(loggedInData);
    }

  }
  logOut() {
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('login');
  }
  onRoleChange(role: string) {
    this.common.onRoleChange$.next(role);
    this.common.role$.next(role);
  }
}
