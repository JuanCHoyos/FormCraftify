import {
  FormType,
  TextAreaFieldType,
  TextAreaPropsType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { FormFieldBaseBuilder } from './base/base-field.builder';

export class TextAreaFieldBuilder extends FormFieldBaseBuilder<TextAreaPropsType> {
  constructor() {
    super({
      placeholder: '',
      minLength: 0,
      maxLength: 10000,
      disabled: false,
      readonly: false,
      required: false,
      tabindex: 0,
      description: '',
      label: '',
      tooltip: '',
    });
  }

  newInstance(): TextAreaFieldBuilder {
    return new TextAreaFieldBuilder();
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

  override build(): TextAreaFieldType {
    return {
      ...super.build(),
      type: FormType.Textarea,
      wrappers: [WrapperType.Field],
    };
  }
}
