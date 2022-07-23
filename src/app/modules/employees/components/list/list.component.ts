import { Component, OnInit } from '@angular/core';
import {Employee} from "@shared/models/employee.model";
import {EMPLOYEES} from "./employees.mock";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public employees: Employee[] = EMPLOYEES;

  constructor() { }

  ngOnInit(): void {
  }

}
