import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextAreaPropsType } from '@core/formly/models/form-field-item';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'input-field-textarea',
  imports: [CommonModule, TextareaModule, ReactiveFormsModule],
  templateUrl: './input-field-text-area.html',
})
export class InputFieldTextArea extends FieldType<FieldTypeConfig<TextAreaPropsType>> {}
