import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AlertComponent } from '../../reusable-component/alert/alert.component';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, AlertComponent],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  div1BgColor: string = '';
  isDiv2Active: boolean = false;
  num1: string = "";
  num2: string = "";
  isActive: boolean = false;
  studentList: any[] = [
    { studentID: 1, totalMarks: 23, gender: "male", name: 'AAA', city: 'Pune', isActive: false },
    { studentID: 2, totalMarks: 43, gender: "male", name: 'BBB', city: 'Pune', isActive: false },
    { studentID: 3, totalMarks: 13, gender: "female", name: 'CCC', city: 'Pune', isActive: true },
    { studentID: 4, totalMarks: 53, gender: "male", name: 'DDD', city: 'Pune', isActive: false },
    { studentID: 5, totalMarks: 83, gender: "female", name: 'EEE', city: 'Pune', isActive: false }
  ]
  customerStyle: any = {
    'color': 'white',
    'background-color': 'red',
    'width': '200px',
    'height': '200px'
  }
  addRedClass() {
    this.div1BgColor = 'bg-danger';
  }
  addblueClass() {
    this.div1BgColor = 'bg-primary';
  }
  toggleDiv2() {
    this.isDiv2Active = !this.isDiv2Active;
  }
}
