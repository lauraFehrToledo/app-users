import { TestBed } from '@angular/core/testing';

import { LibreriaBotonLauraService } from './libreria-boton-laura.service';

describe('LibreriaBotonLauraService', () => {
  let service: LibreriaBotonLauraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibreriaBotonLauraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
