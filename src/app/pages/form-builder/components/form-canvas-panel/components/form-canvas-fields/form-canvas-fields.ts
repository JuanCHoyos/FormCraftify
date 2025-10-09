import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { AddComponentPlaceholder } from '../add-component-placeholder/add-component-placeholder';
import { FormCanvasField } from '../form-canvas-field/form-canvas-field';

@Component({
  selector: 'app-form-canvas-fields',
  imports: [CommonModule, FormCanvasField, AddComponentPlaceholder],
  templateUrl: './form-canvas-fields.html',
})
export class FormCanvasFields {
  fields = input.required<FormlyFieldConfig[]>();
}
