import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CompanyComponent } from './components/company/company.component';
import { TooltipModule } from "@shared/directives/tooltip/tooltip.module";
import { ListComponent } from './components/list/list.component';

const routes = [
  {
    path: '',
    component: CompanyComponent
  }
];

@NgModule({
  declarations: [
    CompanyComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TooltipModule
  ],
  exports: [RouterModule]
})
export class CompanyModule { }
