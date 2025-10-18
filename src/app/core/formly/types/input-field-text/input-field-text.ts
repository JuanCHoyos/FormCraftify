import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextPropsType } from '@core/formly/models/form-field-item';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'input-field-text',
  imports: [CommonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './input-field-text.html',
})
export class InputFieldText extends FieldType<FieldTypeConfig<TextPropsType>> {}
