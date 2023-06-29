import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfuncionarioComponent } from './newfuncionario.component';

describe('NewfuncionarioComponent', () => {
  let component: NewfuncionarioComponent;
  let fixture: ComponentFixture<NewfuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewfuncionarioComponent]
    });
    fixture = TestBed.createComponent(NewfuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
