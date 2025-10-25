import {
  AlignType,
  FormType,
  HeadingType,
  TextFormattingOptionType,
  TitleFieldType,
  TitlePropsType,
} from '@core/formly/models/form-field-item';

import { FormFieldBaseBuilder } from './base/base-field.builder';

export class TitleFieldBuilder extends FormFieldBaseBuilder<TitlePropsType> {
  constructor() {
    super({
      align: AlignType.Left,
      headingType: HeadingType.H1,
      label: '',
      textFormattingOptions: [],
    });
  }

  newInstance(): TitleFieldBuilder {
    return new TitleFieldBuilder();
  }

  setHeadingType(type: HeadingType) {
    this.field.props.headingType = type;
    return this;
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

  override build(): TitleFieldType {
    return {
      ...super.build(),
      type: FormType.Title,
    };
  }
}
