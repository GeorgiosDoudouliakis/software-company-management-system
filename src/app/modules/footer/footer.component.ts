import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <p>Copyright &copy; 2022. All Rights Reserved</p>
    </footer>
  `,
  styles: [`
    @import 'src/assets/scss/variables';
  
    footer {
      background: $primary-color;
      border-top: 2px solid $secondary-color;
    }

    p {
      text-align: center;
      padding: .5rem 0;
      color: #fff;
    }
  `]
})
export class FooterComponent {}