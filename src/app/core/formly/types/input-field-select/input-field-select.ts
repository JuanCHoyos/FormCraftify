import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectPropsType } from '@core/formly/models/form-field-item';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'input-field-select',
  imports: [CommonModule, SelectModule, ReactiveFormsModule],
  templateUrl: './input-field-select.html',
})
export class InputFieldSelect extends FieldType<FieldTypeConfig<SelectPropsType>> {}
