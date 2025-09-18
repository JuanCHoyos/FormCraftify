import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSettingsPanel } from './form-settings-panel';

describe('FormSettingsPanel', () => {
  let component: FormSettingsPanel;
  let fixture: ComponentFixture<FormSettingsPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSettingsPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(FormSettingsPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
