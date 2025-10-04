import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldList } from './form-field-list';

describe('FormFieldList', () => {
  let component: FormFieldList;
  let fixture: ComponentFixture<FormFieldList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldList],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
