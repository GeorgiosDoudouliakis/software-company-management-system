import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {View} from "../../models/view";

@Component({
  selector: 'app-view-select',
  template: `
      <div [ngClass]="{ 'active-view': selectedView === 'grid' }" tooltip="Grid view" placement="left"
            (click)="onViewSelect('grid')">
        <span class="material-icons-round">view_module</span>
      </div>
      <div [ngClass]="{ 'active-view': selectedView === 'list' }" tooltip="List view" placement="left"
           (click)="onViewSelect('list')">
        <span class="material-icons-round">view_list</span>
      </div>
  `,
  styles: [`
    @import 'src/assets/scss/mixins';
    @import 'src/assets/scss/variables';

    :host {
      @include flex(row, flex-end, center);
      margin: 1rem 0 1.5rem 0;
    }

    div {
      transition: .4s ease-in-out;
    }

    div:last-of-type {
      margin-left: .5rem;
    }

    span {
      font-size: 2.5rem;
      color: $primary-color;
      cursor: pointer;
    }

    .active-view {
      background: $primary-color;
      span {
        color: $secondary-color;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewSelectComponent implements OnInit {
  public selectedView: View = 'grid';

  constructor() { }

  ngOnInit(): void {
  }

  public onViewSelect(view: View): void {
    this.selectedView = view;
  }
}
