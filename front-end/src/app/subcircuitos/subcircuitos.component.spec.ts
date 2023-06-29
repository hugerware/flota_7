import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcircuitosComponent } from './subcircuitos.component';

describe('SubcircuitosComponent', () => {
  let component: SubcircuitosComponent;
  let fixture: ComponentFixture<SubcircuitosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcircuitosComponent]
    });
    fixture = TestBed.createComponent(SubcircuitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
