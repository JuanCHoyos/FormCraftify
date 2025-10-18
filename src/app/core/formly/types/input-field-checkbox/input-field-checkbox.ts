import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldPropsBaseType } from '@core/formly/models/form-field-item';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'input-field-checkbox',
  imports: [CommonModule, CheckboxModule, ReactiveFormsModule],
  templateUrl: './input-field-checkbox.html',
})
export class InputFieldCheckbox extends FieldType<FieldTypeConfig<FieldPropsBaseType>> {}
