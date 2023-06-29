import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevehiculoComponent } from './updatevehiculo.component';

describe('UpdatevehiculoComponent', () => {
  let component: UpdatevehiculoComponent;
  let fixture: ComponentFixture<UpdatevehiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatevehiculoComponent]
    });
    fixture = TestBed.createComponent(UpdatevehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
