import {
  FormType,
  TextAreaFieldType,
  TextAreaPropsType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { BaseFieldBuilder } from './base/base-field.builder';

export class TextAreaFieldBuilder extends BaseFieldBuilder<
  TextAreaPropsType,
  TextAreaFieldBuilder
> {
  constructor() {
    super({
      placeholder: '',
      minLength: 0,
      maxLength: 10000,
    });
  }

  newInstance(): TextAreaFieldBuilder {
    return new TextAreaFieldBuilder();
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

  override build(): TextAreaFieldType {
    return {
      ...super.build(),
      type: FormType.textarea,
      props: this.props,
      wrappers: [WrapperType.Field],
    };
  }
}
