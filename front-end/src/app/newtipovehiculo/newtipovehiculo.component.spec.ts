import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtipovehiculoComponent } from './newtipovehiculo.component';

describe('NewtipovehiculoComponent', () => {
  let component: NewtipovehiculoComponent;
  let fixture: ComponentFixture<NewtipovehiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewtipovehiculoComponent]
    });
    fixture = TestBed.createComponent(NewtipovehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
