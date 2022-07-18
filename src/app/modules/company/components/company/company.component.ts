import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {slideInTopAnimation} from "@shared/animations/slide-in-top.animation";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  animations: [slideInTopAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyComponent implements OnInit {
  public projects: string[] = [];
  public services: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
