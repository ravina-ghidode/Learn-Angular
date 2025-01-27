import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StucturalDirectiveComponent } from './directives/stuctural-directive/stuctural-directive.component';
import { AttributeDirectiveComponent } from './directives/attribute-directive/attribute-directive.component';
import { IfElseExamplesComponent } from './components/control-flow/if-else-examples/if-else-examples.component';
import { ForSwitchComponent } from './components/control-flow/for-switch/for-switch.component';
import { PipeComponent } from './pipe/pipe.component';
import { TemplateComponent } from './forms/template/template.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { GetApiComponent } from './apiIntregation/get-api/get-api.component';
import { NgtemplateComponent } from './directives/ngtemplate/ngtemplate.component';
import { NgCOntainerComponent } from './directives/ng-container/ng-container.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './components/service/auth.guard';

export const routes: Routes = [
    //default route
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'add-employee',
                component: AddEmployeeComponent
            },
            {
                path: 'data-binding',
                component: DataBindingComponent,
                canActivate: [authGuard]
            },
            {
                path: 'structural-dir',
                component: StucturalDirectiveComponent
            },
            {
                path: 'attribute-dir',
                component: AttributeDirectiveComponent
            },
            {
                path: 'if-else',
                component: IfElseExamplesComponent
            },
            {
                path: 'for-switch',
                component: ForSwitchComponent
            },
            {
                path: 'pipe',
                component: PipeComponent
            },
            {
                path: 'template',
                component: TemplateComponent
            },
            {
                path: 'reactive',
                component: ReactiveComponent
            },
            {
                path: 'get',
                component: GetApiComponent
            },
            {
                path: 'ngtemplate',
                component: NgtemplateComponent
            },
            {
                path: 'ngcontainer',
                component: NgCOntainerComponent
            },
            {
                path: 'viewchild',
                component: ViewchildComponent
            },
        ]

    },



];
