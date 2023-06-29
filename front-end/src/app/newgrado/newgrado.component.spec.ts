import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgradoComponent } from './newgrado.component';

describe('NewgradoComponent', () => {
  let component: NewgradoComponent;
  let fixture: ComponentFixture<NewgradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewgradoComponent]
    });
    fixture = TestBed.createComponent(NewgradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
