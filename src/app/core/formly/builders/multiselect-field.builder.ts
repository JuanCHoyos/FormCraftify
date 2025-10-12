import {
  FormType,
  MultiSelectFieldType,
  MultiSelectPropsType,
  OptionType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { BaseFieldBuilder } from './base/base-field.builder';

export class MultiSelectFieldBuilder extends BaseFieldBuilder<
  MultiSelectPropsType,
  MultiSelectFieldBuilder
> {
  constructor() {
    super({
      options: [],
      placeholder: '',
    });
  }
  newInstance(): MultiSelectFieldBuilder {
    return new MultiSelectFieldBuilder();
  }
  setPlaceholder(placeholder: string) {
    this.props.placeholder = placeholder;
    return this;
  }

  setOptions(options: OptionType[]) {
    this.props.options = [...options];
    return this;
  }

  override build(): MultiSelectFieldType {
    return {
      ...super.build(),
      type: FormType.multiselect,
      props: this.props,
      wrappers: [WrapperType.Field],
    };
  }
}
