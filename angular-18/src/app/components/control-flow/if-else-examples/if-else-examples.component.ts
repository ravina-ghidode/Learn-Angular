import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-if-else-examples',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './if-else-examples.component.html',
  styleUrl: './if-else-examples.component.css'
})
export class IfElseExamplesComponent {

  div1Visible: boolean = false;
  div2Visible: boolean = false;
  isWarningDiv2Visible: boolean = false;
  isSuccessDiv2Visible: boolean = false;
  num1: string = "";
  num2: string = "";
  selectedStatus: string = "";
  constructor(private common: CommonService) {
    this.common.onRoleChange$.subscribe((res: string) => {

    });
    this.common.role$.subscribe((res: string) => {

    })
  }

  showDiv1() {
    this.div1Visible = true;
  }
  hideDiv1() {
    this.div1Visible = false;
  }
  toggleDiv2() {
    this.isSuccessDiv2Visible = !this.isSuccessDiv2Visible;
  }
}
