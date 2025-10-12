import {
  AlignType,
  FormType,
  ParagraphFieldType,
  ParagraphPropsType,
  TextFormattingOptionType,
} from '@core/formly/models/form-field-item';

import { BaseFieldBuilder } from './base/base-field.builder';

export class ParagraphFieldBuilder extends BaseFieldBuilder<
  ParagraphPropsType,
  ParagraphFieldBuilder
> {
  constructor() {
    super({
      align: AlignType.Left,
      textFormattingOptions: [],
    });
  }

  newInstance(): ParagraphFieldBuilder {
    return new ParagraphFieldBuilder();
  }

  setAlign(align: AlignType) {
    this.props.align = align;
    return this;
  }

  addTextFormatting(textFormattingOption: TextFormattingOptionType) {
    this.props.textFormattingOptions = [...this.props.textFormattingOptions, textFormattingOption];
    return this;
  }

  override build(): ParagraphFieldType {
    return {
      ...super.build(),
      type: FormType.paragraph,
      props: this.props,
    };
  }
}
