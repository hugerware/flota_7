import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefuncionarioComponent } from './updatefuncionario.component';

describe('UpdatefuncionarioComponent', () => {
  let component: UpdatefuncionarioComponent;
  let fixture: ComponentFixture<UpdatefuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatefuncionarioComponent]
    });
    fixture = TestBed.createComponent(UpdatefuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
