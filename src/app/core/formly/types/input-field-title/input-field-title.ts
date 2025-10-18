import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  HeadingType,
  TextFormattingOptionType,
  TitlePropsType,
} from '@core/formly/models/form-field-item';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'input-field-title',
  imports: [CommonModule],
  templateUrl: './input-field-title.html',
})
export class InputFieldTitle extends FieldType<FormlyFieldConfig<TitlePropsType>> {
  HeadingType = HeadingType;
  get customClass() {
    return {
      'font-bold': this.props['textFormattingOptions'].includes(TextFormattingOptionType.Bold),
      'line-through': this.props['textFormattingOptions'].includes(
        TextFormattingOptionType.Strikethrough,
      ),
      italic: this.props['textFormattingOptions'].includes(TextFormattingOptionType.Italic),
      underline: this.props['textFormattingOptions'].includes(TextFormattingOptionType.Underline),
    };
  }
}
