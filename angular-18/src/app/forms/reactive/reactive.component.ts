import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(""),
    userName: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl(""),
    zip: new FormControl(""),
    city: new FormControl(""),
    state: new FormControl(""),
  })

  formValue: any;
  onSave() {
    this.formValue = this.studentForm.value;
  }
}
