import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { EmployeesComponent } from './components/employees/employees.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';

const routes = [
  {
    path: '',
    component: EmployeesComponent
  }
];

@NgModule({
  declarations: [
    EmployeesComponent,
    TabsComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeesModule { }
