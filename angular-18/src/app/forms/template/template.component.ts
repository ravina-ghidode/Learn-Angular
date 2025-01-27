import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Constant } from '../../constants/Constant';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  validationMessage: any = Constant.VALIDATIONS_MESSAGES;
  studentObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    state: '',
    city: '',
    zip: ''
  }
  formValue: any;
  onSubmit() {
    debugger;
    this.formValue = this.studentObj;
  }
  resetForm() {
    this.studentObj = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      state: '',
      city: '',
      zip: ''
    }
  }
}
