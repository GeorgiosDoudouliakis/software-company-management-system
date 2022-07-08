import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SnackbarData } from '../models/snackbar.model';
import { SnackbarService } from '../services/snackbar.service';
import { fadeInAnimation } from "@shared/modules/snackbar/animations/fade-in.animation";
import { fadeOutAnimation } from "@shared/modules/snackbar/animations/fade-out.animation";

@Component({
  selector: 'app-snackbar',
  template: `
    <div class="snackbar-{{ data.type }}" @fadeIn @fadeOut>
      <p>{{ data.message }}</p>
      <button (click)="snackbarService.close()"><span class="material-icons">close</span></button>
    </div>
  `,
  styles: [`
    @import 'src/assets/scss/mixins';

    :host {
      position: fixed;
      bottom: 45px;
      right: 10px;
    }

    div {
      @include flex(row, space-between, center);
      min-width: 300px;
      padding: .5rem;
      border-radius: 4px;
    }

    p {
      font-size: .8rem;
      width: 200px;
      word-break: break-all;
    }

    button {
      font-size: .9rem;
      padding: 0;
      background: inherit;
      .material-icons {
        color: #fff;
      }
    }
  `],
  animations: [fadeInAnimation, fadeOutAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackbarComponent {
  @Input() public data: SnackbarData;

  constructor(public snackbarService: SnackbarService) { }
}
