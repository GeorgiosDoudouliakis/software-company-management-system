import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CellComponent } from './components/cell/cell.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavExpandedDirective } from './directives/nav-expanded.directive';

@NgModule({
  declarations: [
    CellComponent,
    HeaderComponent,
    NavigationComponent,
    NavExpandedDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CellComponent]
})
export class CellModule { }
