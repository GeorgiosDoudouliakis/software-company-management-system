import { Component, OnInit } from '@angular/core';
import { SELECT_ROLE_OPTIONS } from './select-role-options.mock';
import { Option } from "@shared/models/select-option.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [`
    @import 'src/assets/scss/mixins';

    :host {
        @include flex(row, center, center);
        padding-top: 4rem;
    }

    form {
      margin-bottom: 1rem;
      border-radius: 10px;
    }
  `]
})
export class SignupComponent implements OnInit {
  public selectRoleOptions: Option[] = SELECT_ROLE_OPTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
