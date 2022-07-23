import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {fadeInAnimation} from "@shared/animations/fade-in.animation";
import {fadeOutAnimation} from "@shared/animations/fade-out.animation";

@Component({
  selector: 'app-list[items]',
  template: `
    <ul class="list">
      <li *ngFor="let item of items" @fadeIn @fadeOut>
<!--        <span>{{ item.name }}</span>-->
        <input type="text" [value]="item.name" disabled #nameInput />
        <div class="actions">
          <button type="button" *ngIf="!nameInput.disabled" tooltip="Stop editing" placement="left"><span class="material-icons" (click)="stopEdit(nameInput, item)">close</span></button>
          <button type="button" *ngIf="!nameInput.disabled" tooltip="Save" placement="left"><span class="material-icons" (click)="save(nameInput, item)">save</span></button>
          <button type="button" *ngIf="nameInput.disabled" tooltip="Edit" placement="left"><span class="material-icons info" (click)="startEdit(nameInput)">edit</span></button>
          <button type="button" *ngIf="nameInput.disabled" tooltip="Delete" placement="left"><span class="material-icons error">delete</span></button>
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

    input:not([disabled]) {
      width: 500px;
      background: $gray-color;
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

  public stopEdit(nameInput: HTMLInputElement, item: any): void {
    nameInput.setAttribute('disabled', 'disabled');

    if(nameInput.value !== item.name)
      nameInput.value = item.name;
  }

  public startEdit(nameInput: HTMLInputElement): void {
    nameInput.removeAttribute('disabled');
  }

  // TODO Save implementation
  public save(nameInput: HTMLInputElement, item: any): void {

  }
}
