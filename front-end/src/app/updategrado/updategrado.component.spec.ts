import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategradoComponent } from './updategrado.component';

describe('UpdategradoComponent', () => {
  let component: UpdategradoComponent;
  let fixture: ComponentFixture<UpdategradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdategradoComponent]
    });
    fixture = TestBed.createComponent(UpdategradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
