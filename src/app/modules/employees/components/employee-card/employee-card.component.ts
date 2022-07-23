import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Employee} from "@shared/models/employee.model";
import {View} from "../../models/view";

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeCardComponent implements OnChanges, OnInit {
  @Input() public employee: Employee;
  @Input() public view: View;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['view'] && !changes['view'].firstChange && changes['view'].currentValue !== changes['view'].previousValue)
      this.view = changes['view'].currentValue;
  }

  ngOnInit(): void {
  }

}
