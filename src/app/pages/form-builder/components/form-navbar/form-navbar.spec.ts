import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNavbar } from './form-navbar';

describe('FormNavbar', () => {
  let component: FormNavbar;
  let fixture: ComponentFixture<FormNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNavbar],
    }).compileComponents();

    fixture = TestBed.createComponent(FormNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
