import {
  FormType,
  MultiCheckboxFieldType,
  MulticheckboxPropsType,
  OptionType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { BaseFieldBuilder } from './base/base-field.builder';

export class MultiCheckboxFieldBuilder extends BaseFieldBuilder<
  MulticheckboxPropsType,
  MultiCheckboxFieldBuilder
> {
  constructor() {
    super({
      options: [],
    });
  }
  newInstance(): MultiCheckboxFieldBuilder {
    return new MultiCheckboxFieldBuilder();
  }
  setOptions(options: OptionType[]) {
    this.props.options = [...options];
    return this;
  }

  override build(): MultiCheckboxFieldType {
    return {
      ...super.build(),
      type: FormType.multicheckbox,
      props: this.props,
      wrappers: [WrapperType.Field],
    };
  }
}
