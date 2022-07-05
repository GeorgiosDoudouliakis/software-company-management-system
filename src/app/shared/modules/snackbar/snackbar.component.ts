import { ChangeDetectionStrategy, Component, ComponentRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  template: `
    <div class="snackbar-{{ data.type }}">
      <p>{{ data.message }}</p>
      <button class="primary-btn">OK</button>
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
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackbarComponent implements OnInit {
  private componentRef: ComponentRef<SnackbarComponent>;
  @Input() public data: { 
    message: string; 
    type: "error" | "success" | "warning" | "info"; 
  };

  constructor() { }

  ngOnInit(): void {
  }
}
