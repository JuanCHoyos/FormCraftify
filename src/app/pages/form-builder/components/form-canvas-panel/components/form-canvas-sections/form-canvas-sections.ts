import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { AnyFieldType } from '@core/formly/models/form-field-item';
import { NavigationMode } from '@pages/form-builder/model/form-builder';
import { FormCanvasNavigation } from '@pages/form-builder/services/form-canvas-navigation';
import { HeadingType } from '@shared/types/ui.types';
import { StepperModule } from 'primeng/stepper';

import { FormCanvasSection } from '../form-canvas-section/form-canvas-section';

@Component({
  selector: 'app-form-canvas-sections',
  imports: [CommonModule, StepperModule, FormCanvasSection],
  templateUrl: './form-canvas-sections.html',
})
export class FormCanvasSections {
  fields = input.required<AnyFieldType[]>();
  public readonly formCanvasNavigation = inject(FormCanvasNavigation);
  NavigationMode = NavigationMode;

  HeadingType = HeadingType;
}
