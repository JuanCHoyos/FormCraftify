import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { TextFormattingOptionType, TitlePropsType } from '@core/formly/models/form-field-item';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { UITitle } from '@shared/components';

@Component({
  selector: 'input-field-title',
  imports: [CommonModule, UITitle],
  templateUrl: './input-field-title.html',
})
export class InputFieldTitle extends FieldType<FormlyFieldConfig<TitlePropsType>> {
  customClass = computed(() => {
    return {
      'font-bold': this.props['textFormattingOptions'].includes(TextFormattingOptionType.Bold),
      'line-through': this.props['textFormattingOptions'].includes(
        TextFormattingOptionType.Strikethrough,
      ),
      italic: this.props['textFormattingOptions'].includes(TextFormattingOptionType.Italic),
      underline: this.props['textFormattingOptions'].includes(TextFormattingOptionType.Underline),
    };
  });
}
