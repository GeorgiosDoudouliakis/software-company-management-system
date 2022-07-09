import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <ul class="list">
      <li *ngFor="let item of items">
        <span>{{ item }}</span>
        <div class="actions">
          <button tooltip="Edit" placement="bottom"><span class="material-icons info">edit</span></button>
          <button tooltip="Delete" placement="bottom"><span class="material-icons error">delete</span></button>
        </div>
      </li>
    </ul>
  `,
  styles: [`
    @import 'src/assets/scss/variables';
    @import 'src/assets/scss/mixins';

    ul {
      li {
        @include flex(row, space-between, center);
        background: darken($gray-color, 8%);
        padding: .5rem;
        &:not(:last-of-type) {
          margin-bottom: .5rem;
        }
        & > .actions {
          button {
            padding: 0;
            background: inherit;
            &:last-of-type {
              margin-left: .5rem;
            }
          }
        }
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() public items: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
