import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScSelectComponent } from './sc-select.component';

describe('ScSelectComponent', () => {
  let component: ScSelectComponent;
  let fixture: ComponentFixture<ScSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
