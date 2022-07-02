import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public isExpanded: boolean = false;
  @ViewChild('nav') nav: NavigationComponent; 

  constructor() { }

  ngOnInit(): void {
  }

}
