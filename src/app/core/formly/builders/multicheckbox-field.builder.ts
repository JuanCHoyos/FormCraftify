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
      options: [
        { id: 'opt1', label: 'Opción 1', value: 'opcion1' },
        { id: 'opt2', label: 'Opción 2', value: 'opcion2' },
        { id: 'opt3', label: 'Opción 3', value: 'opcion3' },
      ],
      disabled: false,
      readonly: false,
      required: false,
      tabindex: 0,
      description: 'Selecciona todas las opciones que correspondan.',
      label: 'Selecciona opciones',
      tooltip: 'Puedes marcar más de una opción si lo deseas.',
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
