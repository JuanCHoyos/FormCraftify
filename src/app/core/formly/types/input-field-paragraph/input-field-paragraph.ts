import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ParagraphPropsType, TextFormattingOptionType } from '@core/formly/models/form-field-item';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'input-field-paragraph',
  imports: [CommonModule],
  templateUrl: './input-field-paragraph.html',
})
export class InputFieldParagraph extends FieldType<FormlyFieldConfig<ParagraphPropsType>> {
  TextFormattingOption = TextFormattingOptionType;
}
