import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormFieldOptionType } from '@core/formly/models/form-field-item';
import { UIICon } from '@shared/index';

@Component({
  selector: 'app-form-field-item',
  imports: [CommonModule, UIICon],
  templateUrl: './form-field-item.html',
})
export class FormFieldItem {
  item = input.required<FormFieldOptionType>();
}
