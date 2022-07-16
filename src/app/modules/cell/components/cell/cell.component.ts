import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cell',
  template: `
    <app-header (isNavExpandedHandler)="isNavExpanded = $event"></app-header>

    <main [ngStyle]="{ 'margin-left': isNavExpanded ? '150px' : '73px' }">
        <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    @import 'src/assets/scss/variables';

    main {
      height: calc(100vh - 110px);
      padding: 2rem 1rem;
      background: $gray-color;
      transition: .4s ease-in-out;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent {
  public isNavExpanded: boolean = false;
}
