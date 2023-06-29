import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrolComponent } from './newrol.component';

describe('NewrolComponent', () => {
  let component: NewrolComponent;
  let fixture: ComponentFixture<NewrolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewrolComponent]
    });
    fixture = TestBed.createComponent(NewrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
