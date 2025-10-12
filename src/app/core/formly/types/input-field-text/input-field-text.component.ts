import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextPropsType } from '@core/formly/models/form-field-item';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-input-field-text',
  standalone: true,
  imports: [CommonModule, InputTextModule, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-text.component.html',
})
export class InputFieldTextComponent extends FieldType<FieldTypeConfig<TextPropsType>> {}
