import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NumberPropsType } from '@core/formly/models/form-field-item';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'input-field-number',
  imports: [CommonModule, InputNumberModule, ReactiveFormsModule],
  templateUrl: './input-field-number.html',
})
export class InputFieldNumber extends FieldType<FieldTypeConfig<NumberPropsType>> {}
