import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedistritoComponent } from './updatedistrito.component';

describe('UpdatedistritoComponent', () => {
  let component: UpdatedistritoComponent;
  let fixture: ComponentFixture<UpdatedistritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatedistritoComponent]
    });
    fixture = TestBed.createComponent(UpdatedistritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
