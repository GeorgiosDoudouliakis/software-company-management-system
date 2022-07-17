import { Component, OnInit } from '@angular/core';
import {ActiveTabService} from "../../services/active-tab.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(public activeTabService: ActiveTabService) { }

  ngOnInit(): void {
  }

}
