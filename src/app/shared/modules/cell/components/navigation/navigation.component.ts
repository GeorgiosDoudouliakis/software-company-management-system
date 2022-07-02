import { ChangeDetectionStrategy, Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  public isExpanded: boolean = false;

  constructor(public cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

}
