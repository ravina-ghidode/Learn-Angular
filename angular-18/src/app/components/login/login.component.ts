import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  router = inject(Router);
  http = inject(HttpClient);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.minLength(3)]
    })
  }
  onSubmit() {
    this.http.post('https://localhost:7257/api/Login', this.loginForm.value).subscribe({
      next: (res: any) => {
        if (res) { // Assuming the server sends a `success` field
          const username = this.loginForm.value.username;
          alert("User logged in successfully");
          localStorage.setItem('LoginUser', JSON.stringify(username));
          this.router.navigateByUrl('add-employee');
        } else {
          alert("Wrong credentials. Please try again.");
        }
      },
      error: (err) => {
        if (err.status === 401) {
          alert("Invalid credentials. Please check your username and password.");
        } else {
          alert("An unexpected error occurred. Please try again later.");
        }
        console.error("Error response:", err); // Log for debugging
      },
    });
    //   if (this.loginForm.valid) {
    //     const username = this.loginForm.value.username;
    //     const password = this.loginForm.value.password;
    //     localStorage.setItem('LoginUser', username);
    //     if (username === 'admin' && password == '1234') {
    //       alert("user logged in successfully");
    //       this.router.navigateByUrl('add-employee');
    //     }
    //   }
    //   else {
    //     alert("Wrong credentials");
    //   }
  }

}
