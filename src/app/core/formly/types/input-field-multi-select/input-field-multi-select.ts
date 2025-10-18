import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelectPropsType } from '@core/formly/models/form-field-item';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'input-field-multi-select',
  imports: [CommonModule, MultiSelectModule, ReactiveFormsModule],
  templateUrl: './input-field-multi-select.html',
})
export class InputFieldMultiSelect extends FieldType<FieldTypeConfig<MultiSelectPropsType>> {}
