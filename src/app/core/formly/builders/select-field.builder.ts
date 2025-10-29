import {
  FormType,
  OptionType,
  SelectFieldType,
  SelectPropsType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { FormFieldBaseBuilder } from './base/base-field.builder';

export class SelectFieldBuilder extends FormFieldBaseBuilder<SelectPropsType> {
  constructor() {
    super({
      placeholder: 'Selecciona una opción',
      options: [
        { id: 'opt1', label: 'Opción 1', value: 'opcion1' },
        { id: 'opt2', label: 'Opción 2', value: 'opcion2' },
        { id: 'opt3', label: 'Opción 3', value: 'opcion3' },
      ],
      disabled: false,
      readonly: false,
      required: false,
      tabindex: 0,
      description: 'Elige una sola opción de la lista.',
      label: 'Selecciona una opción',
      tooltip: 'Solo puedes elegir una opción.',
    });
  }

  newInstance(): SelectFieldBuilder {
    return new SelectFieldBuilder();
  }

  setPlaceholder(placeholder: string) {
    this.field.props.placeholder = placeholder;
    return this;
  }

  setOptions(options: OptionType[]) {
    this.field.props.options = [...options];
    return this;
  }

  override build(): SelectFieldType {
    return {
      ...super.build(),
      type: FormType.Select,
      wrappers: [WrapperType.Field],
    };
  }
}
