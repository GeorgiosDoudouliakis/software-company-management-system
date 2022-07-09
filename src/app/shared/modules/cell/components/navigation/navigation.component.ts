import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';
import {fadeInAnimation} from "@shared/animations/fade-in.animation";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInAnimation(200, 200)
  ]
})
export class NavigationComponent {
  public isExpanded: boolean = false;
  public isProfileOptionsSectionOpen: boolean = false;

  constructor(public cdr: ChangeDetectorRef) { }
}
