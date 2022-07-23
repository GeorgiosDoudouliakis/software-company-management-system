import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {fadeInAnimation} from "@shared/animations/fade-in.animation";
import {fadeOutAnimation} from "@shared/animations/fade-out.animation";

@Component({
  selector: 'app-list[items]',
  template: `
    <ul class="list">
      <li *ngFor="let item of items" @fadeIn @fadeOut>
        <span>{{ item.name }}</span>
        <div class="actions">
          <button tooltip="Edit" placement="left"><span class="material-icons info">edit</span></button>
          <button tooltip="Delete" placement="left"><span class="material-icons error">delete</span></button>
        </div>
      </li>
    </ul>
  `,
  styles: [`
    @import 'src/assets/scss/variables';
    @import 'src/assets/scss/mixins';

    ul {
      height: 250px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-thumb {
        background: $primary-color;
      }
      li {
        @include flex(row, space-between, center);
        background: $darker-gray-color;
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
  animations: [fadeInAnimation(500), fadeOutAnimation(500)],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() public items: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
