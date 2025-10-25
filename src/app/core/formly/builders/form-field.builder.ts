import {
  FormFieldType,
  FormPropsType,
  FormType,
  FormViewWrapperType,
  GroupFieldType,
} from '@core/formly/models/form-field-item';

import { FormFieldBaseBuilder } from './base/base-field.builder';

export class FormFieldBuilder extends FormFieldBaseBuilder<FormPropsType> {
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
      type: FormType.Group,
      fieldGroup: this.fieldGroup,
      wrappers: [FormViewWrapperType.Card],
    };
  }
}
