import {
  CheckboxFieldType,
  FieldPropsBaseType,
  FormType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { BaseFieldBuilder } from './base/base-field.builder';

export class CheckboxFieldBuilder extends BaseFieldBuilder<
  FieldPropsBaseType,
  CheckboxFieldBuilder
> {
  constructor() {
    super({});
  }
  newInstance(): CheckboxFieldBuilder {
    return new CheckboxFieldBuilder();
  }
  override build(): CheckboxFieldType {
    return {
      ...super.build(),
      type: FormType.checkbox,
      wrappers: [WrapperType.Field],
      props: this.props,
    };
  }
}
