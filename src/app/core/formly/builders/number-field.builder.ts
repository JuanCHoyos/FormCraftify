import {
  FormType,
  NumberFieldType,
  NumberPropsType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { FormFieldBaseBuilder } from './base/base-field.builder';

export class NumberFieldBuilder extends FormFieldBaseBuilder<NumberPropsType> {
  constructor() {
    super({
      placeholder: 'Ingresa un número',
      min: -Infinity,
      max: Infinity,
      disabled: false,
      readonly: false,
      required: false,
      tabindex: 0,
      description: 'Campo para ingresar valores numéricos.',
      label: 'Número',
      tooltip: 'Introduce un valor válido.',
    });
  }

  newInstance(): NumberFieldBuilder {
    return new NumberFieldBuilder();
  }

  setPlaceholder(placeholder: string) {
    this.field.props.placeholder = placeholder;
    return this;
  }

  setMin(min: number) {
    this.field.props.min = min;
    return this;
  }

  setMax(max: number) {
    this.field.props.max = max;
    return this;
  }

  override build(): NumberFieldType {
    return {
      ...super.build(),
      type: FormType.Number,
      wrappers: [WrapperType.Field],
    };
  }
}
