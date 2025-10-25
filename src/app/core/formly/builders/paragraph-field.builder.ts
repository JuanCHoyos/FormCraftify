import {
  AlignType,
  FormType,
  ParagraphFieldType,
  ParagraphPropsType,
  TextFormattingOptionType,
} from '@core/formly/models/form-field-item';

import { FormFieldBaseBuilder } from './base/base-field.builder';

export class ParagraphFieldBuilder extends FormFieldBaseBuilder<ParagraphPropsType> {
  constructor() {
    super({
      align: AlignType.Left,
      label: '',
      textFormattingOptions: [],
    });
  }

  newInstance(): ParagraphFieldBuilder {
    return new ParagraphFieldBuilder();
  }

  setAlign(align: AlignType) {
    this.field.props.align = align;
    return this;
  }

  addTextFormatting(textFormattingOption: TextFormattingOptionType) {
    this.field.props.textFormattingOptions = [
      ...this.field.props.textFormattingOptions,
      textFormattingOption,
    ];
    return this;
  }

  override build(): ParagraphFieldType {
    return {
      ...super.build(),
      type: FormType.Paragraph,
    };
  }
}
