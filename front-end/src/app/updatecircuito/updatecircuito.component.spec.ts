import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecircuitoComponent } from './updatecircuito.component';

describe('UpdatecircuitoComponent', () => {
  let component: UpdatecircuitoComponent;
  let fixture: ComponentFixture<UpdatecircuitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatecircuitoComponent]
    });
    fixture = TestBed.createComponent(UpdatecircuitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
