import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { GroupFieldType } from '@core/formly/models/form-field-item';
import { NavigationMode } from '@features/form-designer/model/form-designer';
import { FormDesignerNavigation } from '@features/form-designer/services/form-designer-navigation';
import { StepperModule } from 'primeng/stepper';

import { FormCanvasSection } from '../form-canvas-section/form-canvas-section';

@Component({
  selector: 'app-form-canvas-sections',
  imports: [CommonModule, StepperModule, FormCanvasSection],
  templateUrl: './form-canvas-sections.html',
})
export class FormCanvasSections {
  fields = input.required<GroupFieldType[]>();
  public readonly formDesignNavigation = inject(FormDesignerNavigation);
  NavigationMode = NavigationMode;
}
