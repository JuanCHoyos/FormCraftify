import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextAreaPropsType } from '@core/formly/models/form-field-item';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-input-field-textarea',
  standalone: true,
  imports: [CommonModule, TextareaModule, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-text-area.component.html',
})
export class InputFieldTextAreaComponent extends FieldType<FieldTypeConfig<TextAreaPropsType>> {}
