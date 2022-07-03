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
    main {
      height: calc(100vh - 110px);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
