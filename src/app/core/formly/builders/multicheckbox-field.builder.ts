import {
  FormType,
  MultiCheckboxFieldType,
  MulticheckboxPropsType,
  OptionType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { FormFieldBaseBuilder } from './base/base-field.builder';

export class MultiCheckboxFieldBuilder extends FormFieldBaseBuilder<MulticheckboxPropsType> {
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
  newInstance(): MultiCheckboxFieldBuilder {
    return new MultiCheckboxFieldBuilder();
  }
  setOptions(options: OptionType[]) {
    this.field.props.options = [...options];
    return this;
  }

  override build(): MultiCheckboxFieldType {
    return {
      ...super.build(),
      type: FormType.Multicheckbox,
      wrappers: [WrapperType.Field],
    };
  }
}
