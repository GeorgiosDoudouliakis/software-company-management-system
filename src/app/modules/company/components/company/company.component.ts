import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {slideInTopAnimation} from "@shared/animations/slide-in-top.animation";
import {Project} from "@shared/models/project.model";
import {Service} from "@shared/models/service.model";
import {SERVICES} from './services.mock';
import {PROJECTS} from "./projects.mock";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  animations: [slideInTopAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyComponent implements OnInit {
  public projects: Project[] = PROJECTS;
  public services: Service[] = SERVICES;

  constructor() { }

  ngOnInit(): void {
  }
}
