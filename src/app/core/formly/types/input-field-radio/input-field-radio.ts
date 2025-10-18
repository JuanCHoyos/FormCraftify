import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioPropsType } from '@core/formly/models/form-field-item';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'input-field-radio',
  imports: [CommonModule, RadioButtonModule, ReactiveFormsModule],
  templateUrl: './input-field-radio.html',
})
export class InputFieldRadio extends FieldType<FieldTypeConfig<RadioPropsType>> {}
