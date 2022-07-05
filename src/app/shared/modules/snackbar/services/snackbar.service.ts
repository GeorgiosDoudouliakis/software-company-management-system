import { Injectable, ViewContainerRef } from '@angular/core';
import { SnackbarComponent } from '../components/snackbar.component';
import { SnackbarData } from '../models/snackbar.model';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  public _viewContainerRef: ViewContainerRef;

  private saveViewContainerRef(value: ViewContainerRef) {
    this._viewContainerRef = value;
  }

  /**
   * @params vrc: view container ref of the component where we want to attach the snackbar
   *         data: data of the snackbar
   * @return void
   */
  public open(vrc: ViewContainerRef, data: SnackbarData) {
    this.saveViewContainerRef(vrc);
    const componentRef = vrc.createComponent(SnackbarComponent);
    componentRef.instance.data = data;
  }

  public close() {
    this._viewContainerRef.clear();
  }
}