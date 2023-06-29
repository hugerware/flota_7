import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesubcircuitoComponent } from './updatesubcircuito.component';

describe('UpdatesubcircuitoComponent', () => {
  let component: UpdatesubcircuitoComponent;
  let fixture: ComponentFixture<UpdatesubcircuitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatesubcircuitoComponent]
    });
    fixture = TestBed.createComponent(UpdatesubcircuitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
