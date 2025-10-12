import {
  FormType,
  OptionType,
  SelectFieldType,
  SelectPropsType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { BaseFieldBuilder } from './base/base-field.builder';

export class SelectFieldBuilder extends BaseFieldBuilder<SelectPropsType, SelectFieldBuilder> {
  constructor() {
    super({
      placeholder: '',
      options: [],
    });
  }

  newInstance(): SelectFieldBuilder {
    return new SelectFieldBuilder();
  }

  setPlaceholder(placeholder: string) {
    this.props.placeholder = placeholder;
    return this;
  }

  setOptions(options: OptionType[]) {
    this.props.options = [...options];
    return this;
  }

  override build(): SelectFieldType {
    return {
      ...super.build(),
      type: FormType.select,
      props: this.props,
      wrappers: [WrapperType.Field],
    };
  }
}
