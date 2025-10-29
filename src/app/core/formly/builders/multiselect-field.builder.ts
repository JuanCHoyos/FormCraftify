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
      options: [
        { id: 'opt1', label: 'Opción 1', value: 'opcion1' },
        { id: 'opt2', label: 'Opción 2', value: 'opcion2' },
        { id: 'opt3', label: 'Opción 3', value: 'opcion3' },
      ],
      placeholder: 'Selecciona una o varias opciones',
      disabled: false,
      readonly: false,
      required: false,
      tabindex: 0,
      description: 'Selecciona las opciones que correspondan.',
      label: 'Selecciona opciones',
      tooltip: 'Puedes elegir más de una opción.',
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
