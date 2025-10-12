import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FieldBaseType,
  ParagraphPropsType,
  TextFormattingOptionType,
} from '@core/formly/models/form-field-item';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-paragraph-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paragraph.component.html',
})
export class ParagraphWrapperComponent extends FieldType<FieldBaseType<ParagraphPropsType>> {
  TextFormattingOption = TextFormattingOptionType;
}
