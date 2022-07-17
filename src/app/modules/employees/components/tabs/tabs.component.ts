import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActiveTabService} from "../../services/active-tab.service";

@Component({
  selector: 'app-tabs',
  template: `
    <button [ngClass]="{ 'active': activeTabService.activeTab === 'create' }" (click)="activeTabService.activeTab = 'create'">Create</button>
    <button [ngClass]="{ 'active': activeTabService.activeTab === 'list' }" (click)="activeTabService.activeTab = 'list'">List</button>
  `,
  styles: [`
    @import 'src/assets/scss/variables';

    button {
      width: 100px;
      color: $primary-color;
      background: $darker-gray-color;
      border-radius: 0;
      &.active {
        color: $secondary-color;
        background: $primary-color;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
  constructor(public activeTabService: ActiveTabService) { }
}
