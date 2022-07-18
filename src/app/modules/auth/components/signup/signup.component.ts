import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SELECT_ROLE_OPTIONS} from './select-role-options.mock';
import {Option} from "@shared/models/select-option.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [`
    @import 'src/assets/scss/mixins';
    @import 'src/assets/scss/variables';

    :host {
        @include flex(row, center, center);
    }

    form {
      margin-bottom: 1rem;
      border-radius: 10px;
    }

    sc-select select {
      color: $secondary-color;
      background: $primary-color;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
  public selectRoleOptions: Option[] = SELECT_ROLE_OPTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
