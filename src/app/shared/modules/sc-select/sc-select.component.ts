import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Option} from "../../models/select-option.model";

@Component({
  selector: 'sc-select[scLabel][scOptions][scWidth]',
  templateUrl: './sc-select.component.html',
  styleUrls: ['./sc-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScSelectComponent implements OnInit {
  @Input() public scLabel: string;
  @Input() public scOptions: Option[];
  @Input() public scWidth: number;

  constructor() { }

  ngOnInit(): void {
  }

}
