import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell',
  template: `
    <app-header></app-header>

    <main>
        <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    @import 'src/assets/scss/variables';

    main {
      height: calc(100vh - 110px);
      background: $gray-color;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
