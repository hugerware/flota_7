import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetipovehiculoComponent } from './updatetipovehiculo.component';

describe('UpdatetipovehiculoComponent', () => {
  let component: UpdatetipovehiculoComponent;
  let fixture: ComponentFixture<UpdatetipovehiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatetipovehiculoComponent]
    });
    fixture = TestBed.createComponent(UpdatetipovehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
