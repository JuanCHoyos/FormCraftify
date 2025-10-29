import {
  CheckboxFieldType,
  FieldPropsBaseType,
  FormType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { FormFieldBaseBuilder } from './base/base-field.builder';

export class CheckboxFieldBuilder extends FormFieldBaseBuilder<FieldPropsBaseType> {
  constructor() {
    super({
      disabled: false,
      readonly: false,
      required: false,
      tabindex: 0,
      description: 'Marca esta opción si aceptas los términos y condiciones.',
      label: 'Aceptar términos',
      tooltip: 'Obligatorio para continuar con el registro.',
    });
  }
  newInstance(): CheckboxFieldBuilder {
    return new CheckboxFieldBuilder();
  }

  override build(): CheckboxFieldType {
    return {
      ...super.build(),
      type: FormType.Checkbox,
      wrappers: [WrapperType.Field],
    };
  }
}
