import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StucturalDirectiveComponent } from './directives/stuctural-directive/stuctural-directive.component';
import { AttributeDirectiveComponent } from './directives/attribute-directive/attribute-directive.component';

export const routes: Routes = [
    {
        path: 'add-employee',
        component: AddEmployeeComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'structural-dir',
        component: StucturalDirectiveComponent
    },
    {
        path: 'attribute-dir',
        component: AttributeDirectiveComponent
    }
];
