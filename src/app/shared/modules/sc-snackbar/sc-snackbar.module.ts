import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScSnackbarComponent } from './components/sc-snackbar.component';

@NgModule({
  declarations: [
    ScSnackbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScSnackbarComponent
  ]
})
export class ScSnackbarModule { }
