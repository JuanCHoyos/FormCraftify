import {
  FormType,
  OptionType,
  RadioFieldType,
  RadioPropsType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { BaseFieldBuilder } from './base/base-field.builder';

export class RadioFieldBuilder extends BaseFieldBuilder<RadioPropsType, RadioFieldBuilder> {
  constructor() {
    super({
      options: [],
    });
  }

  newInstance(): RadioFieldBuilder {
    return new RadioFieldBuilder();
  }

  setOptions(options: OptionType[]) {
    this.props.options = [...options];
    return this;
  }

  override build(): RadioFieldType {
    return {
      ...super.build(),
      type: FormType.radio,
      props: this.props,
      wrappers: [WrapperType.Field],
    };
  }
}
