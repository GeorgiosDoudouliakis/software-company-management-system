import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScSnackbarData } from '../models/sc-snackbar.model';
import { ScSnackbarService } from '../services/sc-snackbar.service';
import { fadeInAnimation } from "@shared/animations/fade-in.animation";
import { fadeOutAnimation } from "@shared/animations/fade-out.animation";

@Component({
  selector: 'sc-snackbar[scData]',
  template: `
    <div class="snackbar-{{ scData.type }}" @fadeIn @fadeOut>
      <p>{{ scData.message }}</p>
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
  animations: [fadeInAnimation(850), fadeOutAnimation(850)],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScSnackbarComponent {
  @Input() public scData: ScSnackbarData;

  constructor(public snackbarService: ScSnackbarService) { }
}
