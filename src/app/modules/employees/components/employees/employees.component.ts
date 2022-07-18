import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActiveTabService} from "../../services/active-tab.service";
import {slideInTopAnimation} from "@shared/animations/slide-in-top.animation";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  animations: [slideInTopAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent implements OnInit {

  constructor(public activeTabService: ActiveTabService) { }

  ngOnInit(): void {
  }

}
