import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
