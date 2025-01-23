import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stuctural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stuctural-directive.component.html',
  styleUrl: './stuctural-directive.component.css'
})
export class StucturalDirectiveComponent {
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = false;
  num1: string = "";
  num2: string = "";
  isActive: boolean = false;
  selectedState: string = "";
  cityArray: string[] = ["Pune, Indore, Noida, Bhopal"];
  studentList: any[] = [
    { studentID: 1, name: 'AAA', city: 'Pune', isActive: false },
    { studentID: 2, name: 'BBB', city: 'Pune', isActive: false },
    { studentID: 3, name: 'CCC', city: 'Pune', isActive: true },
    { studentID: 4, name: 'DDD', city: 'Pune', isActive: false },
    { studentID: 5, name: 'EEE', city: 'Pune', isActive: false }
  ]
  showDiv1() {
    this.isDiv1Visible = true;
  }
  hideDiv1() {
    this.isDiv1Visible = false;
  }
  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;
  }
}
