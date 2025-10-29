import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { FieldPropsBaseType, FormFieldConfig } from '@core/formly/models/form-field-item';
import { FieldWrapper } from '@ngx-formly/core';

import { FormType } from '../../models/form-field-item';

@Component({
  selector: 'field-wrapper',
  imports: [CommonModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './field-wrapper.html',
})
export class InputFieldWrapper extends FieldWrapper<FormFieldConfig<FieldPropsBaseType>> {
  FormType = FormType;
  hiddenLabelTypes = signal<FormType[]>([FormType.Checkbox]);
}
