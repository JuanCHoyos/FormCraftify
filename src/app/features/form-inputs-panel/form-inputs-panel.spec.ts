import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputsPanel } from './form-inputs-panel';

describe('FormInputsPanel', () => {
  let component: FormInputsPanel;
  let fixture: ComponentFixture<FormInputsPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInputsPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(FormInputsPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
