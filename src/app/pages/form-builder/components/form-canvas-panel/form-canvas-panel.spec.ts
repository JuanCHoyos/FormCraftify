import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCanvasPanel } from './form-canvas-panel';

describe('FormCanvasPanel', () => {
  let component: FormCanvasPanel;
  let fixture: ComponentFixture<FormCanvasPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCanvasPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(FormCanvasPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
