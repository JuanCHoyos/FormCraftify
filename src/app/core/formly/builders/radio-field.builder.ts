import {
  FormType,
  OptionType,
  RadioFieldType,
  RadioPropsType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { FormFieldBaseBuilder } from './base/base-field.builder';

export class RadioFieldBuilder extends FormFieldBaseBuilder<RadioPropsType> {
  constructor() {
    super({
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

  newInstance(): RadioFieldBuilder {
    return new RadioFieldBuilder();
  }

  setOptions(options: OptionType[]) {
    this.field.props.options = [...options];
    return this;
  }

  override build(): RadioFieldType {
    return {
      ...super.build(),
      type: FormType.Radio,
      wrappers: [WrapperType.Field],
    };
  }
}
