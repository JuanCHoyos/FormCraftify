import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AnyFieldType } from '@core/formly/models/form-field-item';
import { FormlyForm } from '@ngx-formly/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-form-canvas-field',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, FormlyForm],
  templateUrl: './form-canvas-field.html',
})
export class FormCanvasField {
  field = input.required<AnyFieldType>();
}
