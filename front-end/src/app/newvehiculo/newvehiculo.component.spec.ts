import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewvehiculoComponent } from './newvehiculo.component';

describe('NewvehiculoComponent', () => {
  let component: NewvehiculoComponent;
  let fixture: ComponentFixture<NewvehiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewvehiculoComponent]
    });
    fixture = TestBed.createComponent(NewvehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
