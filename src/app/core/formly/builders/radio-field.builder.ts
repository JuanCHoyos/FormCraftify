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
      options: [
        { id: 'opt1', label: 'Opción 1', value: 'opcion1' },
        { id: 'opt2', label: 'Opción 2', value: 'opcion2' },
        { id: 'opt3', label: 'Opción 3', value: 'opcion3' },
      ],
      disabled: false,
      readonly: false,
      required: false,
      tabindex: 0,
      description: 'Selecciona solo una de las opciones disponibles.',
      label: 'Elige una opción',
      tooltip: 'Solo puedes marcar una opción.',
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
