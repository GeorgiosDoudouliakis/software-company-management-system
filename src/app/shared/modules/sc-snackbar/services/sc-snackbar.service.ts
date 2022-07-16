import { Injectable, ViewContainerRef } from '@angular/core';
import { ScSnackbarComponent } from '../components/sc-snackbar.component';
import { ScSnackbarData } from '../models/sc-snackbar.model';

@Injectable({
  providedIn: 'root'
})
export class ScSnackbarService {
  public viewContainerRef: ViewContainerRef;

  private saveViewContainerRef(value: ViewContainerRef): void {
    this.viewContainerRef = value;
  }

  /**
   * @params scVrc: view container ref of the component where we want to attach the snackbar
   *         scData: data of the snackbar
   * @return void
   */
  public open(scVrc: ViewContainerRef, scData: ScSnackbarData): void {
    this.saveViewContainerRef(scVrc);
    const componentRef = scVrc.createComponent(ScSnackbarComponent);
    componentRef.instance.scData = scData;
  }

  public close(): void {
    this.viewContainerRef.clear();
  }
}
