import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SELECT_ROLE_OPTIONS} from "./select-role-options.mock";
import {Option} from "@shared/models/select-option.model";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit {
  public selectRoleOptions: Option[] = SELECT_ROLE_OPTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
