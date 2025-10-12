import {
  FormFieldType,
  FormPropsType,
  FormViewWrapperType,
  GroupFieldType,
} from '@core/formly/models/form-field-item';

import { BaseFieldBuilder } from './base/base-field.builder';

export class FormFieldBuilder extends BaseFieldBuilder<FormPropsType, FormFieldBuilder> {
  protected fieldGroup: GroupFieldType[] = [];
  constructor() {
    super({ label: '' });
  }
  newInstance(): FormFieldBuilder {
    return new FormFieldBuilder();
  }

  setFieldGroup(fields: GroupFieldType[]) {
    this.fieldGroup = fields;
    return this;
  }

  override build(): FormFieldType {
    return {
      ...super.build(),
      fieldGroup: this.fieldGroup,
      props: this.props,
      wrappers: [FormViewWrapperType.Card],
    };
  }
}
