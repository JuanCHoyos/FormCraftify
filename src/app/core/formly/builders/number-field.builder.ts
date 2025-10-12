import {
  FormType,
  NumberFieldType,
  NumberPropsType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { BaseFieldBuilder } from './base/base-field.builder';

export class NumberFieldBuilder extends BaseFieldBuilder<NumberPropsType, NumberFieldBuilder> {
  constructor() {
    super({
      placeholder: '',
      min: -Infinity,
      max: Infinity,
    });
  }

  newInstance(): NumberFieldBuilder {
    return new NumberFieldBuilder();
  }

  setPlaceholder(placeholder: string) {
    this.props.placeholder = placeholder;
    return this;
  }

  setMin(min: number) {
    this.props.min = min;
    return this;
  }

  setMax(max: number) {
    this.props.max = max;
    return this;
  }

  override build(): NumberFieldType {
    return {
      ...super.build(),
      type: FormType.number,
      props: this.props,
      wrappers: [WrapperType.Field],
    };
  }
}
