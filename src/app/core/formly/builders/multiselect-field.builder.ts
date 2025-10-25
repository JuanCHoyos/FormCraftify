import {
  FormType,
  MultiSelectFieldType,
  MultiSelectPropsType,
  OptionType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { FormFieldBaseBuilder } from './base/base-field.builder';

export class MultiSelectFieldBuilder extends FormFieldBaseBuilder<MultiSelectPropsType> {
  constructor() {
    super({
      options: [],
      placeholder: '',
      disabled: false,
      readonly: false,
      required: false,
      tabindex: 0,
      description: '',
      label: '',
      tooltip: '',
    });
  }
  newInstance(): MultiSelectFieldBuilder {
    return new MultiSelectFieldBuilder();
  }
  setPlaceholder(placeholder: string) {
    this.field.props.placeholder = placeholder;
    return this;
  }

  setOptions(options: OptionType[]) {
    this.field.props.options = [...options];
    return this;
  }

  override build(): MultiSelectFieldType {
    return {
      ...super.build(),
      type: FormType.Multiselect,
      wrappers: [WrapperType.Field],
    };
  }
}
