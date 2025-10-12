import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FieldBaseType,
  HeadingType,
  TextFormattingOptionType,
  TitlePropsType,
} from '@core/formly/models/form-field-item';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-title-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleWrapperComponent extends FieldType<FieldBaseType<TitlePropsType>> {
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
