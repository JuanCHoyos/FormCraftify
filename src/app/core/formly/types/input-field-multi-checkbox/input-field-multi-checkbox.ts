import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MulticheckboxPropsType } from '@core/formly/models/form-field-item';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'input-field-multi-checkbox',
  imports: [CommonModule, CheckboxModule, ReactiveFormsModule],
  templateUrl: './input-field-multi-checkbox.html',
})
export class InputFieldMultiCheckbox extends FieldType<FieldTypeConfig<MulticheckboxPropsType>> {}
