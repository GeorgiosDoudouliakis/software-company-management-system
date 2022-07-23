import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SELECT_ROLE_OPTIONS} from "./select-role-options.mock";
import {Option} from "@shared/models/select-option.model";
import {AVAILABLE_PROJECTS} from "./available-projects.mock";
import {GENDER_OPTIONS} from "./gender-options.mock";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit {
  public selectRoleOptions: Option[] = SELECT_ROLE_OPTIONS;
  public availableProjects: Option[] = AVAILABLE_PROJECTS;
  public genderOptions: Option[] = GENDER_OPTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
