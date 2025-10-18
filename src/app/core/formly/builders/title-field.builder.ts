import {
  AlignType,
  FormType,
  HeadingType,
  TextFormattingOptionType,
  TitleFieldType,
  TitlePropsType,
} from '@core/formly/models/form-field-item';

import { BaseFieldBuilder } from './base/base-field.builder';

export class TitleFieldBuilder extends BaseFieldBuilder<TitlePropsType, TitleFieldBuilder> {
  constructor() {
    super({
      align: AlignType.Left,
      headingType: HeadingType.H1,
      textFormattingOptions: [],
    });
  }

  newInstance(): TitleFieldBuilder {
    return new TitleFieldBuilder();
  }

  setHeadingType(type: HeadingType) {
    this.props.headingType = type;
    return this;
  }

  setAlign(align: AlignType) {
    this.props.align = align;
    return this;
  }

  addTextFormatting(textFormattingOption: TextFormattingOptionType) {
    this.props.textFormattingOptions = [...this.props.textFormattingOptions, textFormattingOption];
    return this;
  }

  override build(): TitleFieldType {
    return {
      ...super.build(),
      type: FormType.title,
      props: this.props,
    };
  }
}
