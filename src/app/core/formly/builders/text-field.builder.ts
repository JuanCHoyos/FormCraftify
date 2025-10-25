import {
  FormType,
  TextFieldType,
  TextPropsType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { FormFieldBaseBuilder } from './base/base-field.builder';

export class TextFieldBuilder extends FormFieldBaseBuilder<TextPropsType> {
  constructor() {
    super({
      placeholder: '',
      minLength: 0,
      maxLength: Infinity,
      disabled: false,
      readonly: false,
      required: false,
      tabindex: 0,
      description: '',
      label: '',
      tooltip: '',
    });
  }

  newInstance(): TextFieldBuilder {
    return new TextFieldBuilder();
  }

  setPlaceholder(placeholder: string) {
    this.field.props.placeholder = placeholder;
    return this;
  }

  setMinLength(min: number) {
    this.field.props.minLength = min;
    return this;
  }

  setMaxLength(max: number) {
    this.field.props.maxLength = max;
    return this;
  }

  override build(): TextFieldType {
    return {
      ...super.build(),
      type: FormType.Text,
      wrappers: [WrapperType.Field],
    };
  }
}
