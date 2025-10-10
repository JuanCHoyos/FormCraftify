import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { FormCanvasFields } from '../form-canvas-fields/form-canvas-fields';

@Component({
  selector: 'app-form-canvas-section',
  imports: [CommonModule, ReactiveFormsModule, FormCanvasFields],
  templateUrl: './form-canvas-section.html',
})
export class FormCanvasSection {
  field = input.required<FormlyFieldConfig>();
}
