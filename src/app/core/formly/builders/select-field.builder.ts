import {
  FormType,
  OptionType,
  SelectFieldType,
  SelectPropsType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { FormFieldBaseBuilder } from './base/base-field.builder';

export class SelectFieldBuilder extends FormFieldBaseBuilder<SelectPropsType> {
  constructor() {
    super({
      placeholder: '',
      options: [],
      disabled: false,
      readonly: false,
      required: false,
      tabindex: 0,
      description: '',
      label: '',
      tooltip: '',
    });
  }

  newInstance(): SelectFieldBuilder {
    return new SelectFieldBuilder();
  }

  setPlaceholder(placeholder: string) {
    this.field.props.placeholder = placeholder;
    return this;
  }

  setOptions(options: OptionType[]) {
    this.field.props.options = [...options];
    return this;
  }

  override build(): SelectFieldType {
    return {
      ...super.build(),
      type: FormType.Select,
      wrappers: [WrapperType.Field],
    };
  }
}
