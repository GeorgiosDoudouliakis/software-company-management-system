import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  public isExpanded: boolean = false;
  public isProfileOptionsSectionOpen: boolean = false;

  constructor(public cdr: ChangeDetectorRef) { }
}
