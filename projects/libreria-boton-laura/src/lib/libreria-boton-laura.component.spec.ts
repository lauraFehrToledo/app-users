import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreriaBotonLauraComponent } from './libreria-boton-laura.component';

describe('LibreriaBotonLauraComponent', () => {
  let component: LibreriaBotonLauraComponent;
  let fixture: ComponentFixture<LibreriaBotonLauraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibreriaBotonLauraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibreriaBotonLauraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
