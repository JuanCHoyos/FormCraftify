import {
  FormType,
  TextFieldType,
  TextPropsType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { BaseFieldBuilder } from './base/base-field.builder';

export class TextFieldBuilder extends BaseFieldBuilder<TextPropsType, TextFieldBuilder> {
  constructor() {
    super({
      placeholder: '',
      minLength: 0,
      maxLength: Infinity,
    });
  }

  newInstance(): TextFieldBuilder {
    return new TextFieldBuilder();
  }

  setPlaceholder(placeholder: string) {
    this.props.placeholder = placeholder;
    return this;
  }

  setMinLength(min: number) {
    this.props.minLength = min;
    return this;
  }

  setMaxLength(max: number) {
    this.props.maxLength = max;
    return this;
  }

  override build(): TextFieldType {
    return {
      ...super.build(),
      type: FormType.text,
      props: this.props,
      wrappers: [WrapperType.Field],
    };
  }
}
