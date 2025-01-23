import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-switch',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './for-switch.component.html',
  styleUrl: './for-switch.component.css'
})
export class ForSwitchComponent {
  cityArray: string[] = ['Pune', 'Indore', 'Noida', 'Bhopal'];
  studentList: any[] = [
    { studentID: 1, name: 'AAA', city: 'Pune', isActive: false },
    { studentID: 2, name: 'BBB', city: 'Pune', isActive: false },
    { studentID: 3, name: 'CCC', city: 'Pune', isActive: true },
    { studentID: 4, name: 'DDD', city: 'Pune', isActive: false },
    { studentID: 5, name: 'EEE', city: 'Pune', isActive: false }
  ]
  dayNumber: string = '';

}
