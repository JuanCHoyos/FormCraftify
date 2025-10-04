import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldItem } from './form-field-item';

describe('FormFieldItem', () => {
  let component: FormFieldItem;
  let fixture: ComponentFixture<FormFieldItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldItem],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
