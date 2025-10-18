import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlertFieldType, TextFormattingOptionType } from '@core/formly/models/form-field-item';
import { FieldWrapper } from '@ngx-formly/core';
import { UIAlert } from '@shared/components';

@Component({
  selector: 'input-field-alert',
  imports: [CommonModule, UIAlert],
  templateUrl: './input-field-alert.html',
})
export class InputFieldAlert extends FieldWrapper<AlertFieldType> {
  TextFormattingOptionType = TextFormattingOptionType;
}
