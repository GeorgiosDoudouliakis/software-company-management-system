import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ScSelectModule } from "@shared/modules/sc-select/sc-select.module";
import { EmployeesComponent } from './components/employees/employees.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { ActiveTabService } from "./services/active-tab.service";
import { ViewSelectComponent } from './components/view-select/view-select.component';
import { TooltipModule } from "@shared/directives/tooltip/tooltip.module";

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
    ListComponent,
    ViewSelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ScSelectModule,
    TooltipModule
  ],
  exports: [
    RouterModule
  ],
  providers: [ActiveTabService]
})
export class EmployeesModule { }
