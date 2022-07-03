import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    @import 'src/assets/scss/mixins';

    :host {
        @include flex(row, center, center);
        padding-top: 4rem;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
