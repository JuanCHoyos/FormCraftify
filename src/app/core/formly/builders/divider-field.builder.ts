import { DividerFieldType, DividerPropsType, FormType } from '@core/formly/models/form-field-item';

import { FormFieldBaseBuilder } from './base/base-field.builder';

export class DividerFieldBuilder extends FormFieldBaseBuilder<DividerPropsType> {
  constructor() {
    super({ color: '' });
  }

  newInstance(): DividerFieldBuilder {
    return new DividerFieldBuilder();
  }

  override build(): DividerFieldType {
    return {
      ...super.build(),
      type: FormType.Divider,
    };
  }
}
