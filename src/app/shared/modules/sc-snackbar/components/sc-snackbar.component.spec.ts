import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScSnackbarComponent } from './sc-snackbar.component';

describe('ScSnackbarComponent', () => {
  let component: ScSnackbarComponent;
  let fixture: ComponentFixture<ScSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
