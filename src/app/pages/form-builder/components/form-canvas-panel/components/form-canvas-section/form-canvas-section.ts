import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Heading, UITitle } from '@shared/index';

import { FormCanvasEmptyMessage } from '../empty-message/canvas-empty-message';
import { FormCanvasFields } from '../form-canvas-fields/form-canvas-fields';

@Component({
  selector: 'app-form-canvas-section',
  imports: [CommonModule, ReactiveFormsModule, FormCanvasEmptyMessage, FormCanvasFields, UITitle],
  templateUrl: './form-canvas-section.html',
})
export class FormCanvasSection {
  fieldGroup = input.required<FormlyFieldConfig>();
  Heading = Heading;
}
