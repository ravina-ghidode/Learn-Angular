import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AlertComponent } from '../reusable-component/alert/alert.component';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent implements AfterViewInit {

  @ViewChild('txt') textBox: ElementRef | undefined;
  @ViewChild(AlertComponent) alertComp: AlertComponent | undefined;
  ngAfterViewInit(): void {
    const value = this.textBox?.nativeElement.value;
    const alertMode = this.alertComp?.alertMode;
  }
}
