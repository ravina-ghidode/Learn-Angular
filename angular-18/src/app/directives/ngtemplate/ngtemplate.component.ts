import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.css'
})
export class NgtemplateComponent {

  isUserLoggedIn: boolean = true;
  loggedUserName: string = "";
  @ViewChild('dynamicTem') dynamicTemp: TemplateRef<any> | undefined;
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) dynamicCon: ViewContainerRef | undefined;
  loadTemplate() {
    if (this.dynamicTemp) {
      this.dynamicCon?.createEmbeddedView(this.dynamicTemp);

    }
  }
}
