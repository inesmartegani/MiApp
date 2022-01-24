import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfesionalComponent } from './form-profesional.component';

describe('FormProfesionalComponent', () => {
  let component: FormProfesionalComponent;
  let fixture: ComponentFixture<FormProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProfesionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
