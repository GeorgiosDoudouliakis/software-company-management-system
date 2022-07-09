import {ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public isExpanded: boolean = false;
  @Output() public isNavExpandedHandler = new EventEmitter<boolean>();
  @ViewChild('nav') public nav: NavigationComponent;
}
