import { TestBed } from '@angular/core/testing';

import { ScSnackbarService } from './sc-snackbar.service';

describe('ScSnackbarService', () => {
  let service: ScSnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScSnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
