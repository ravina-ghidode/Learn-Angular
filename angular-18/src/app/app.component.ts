import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StucturalDirectiveComponent } from './directives/stuctural-directive/stuctural-directive.component';
import { AttributeDirectiveComponent } from './directives/attribute-directive/attribute-directive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataBindingComponent, StucturalDirectiveComponent, AttributeDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-18';
}
