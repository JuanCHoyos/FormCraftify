import {
  AnyFieldType,
  FormType,
  GroupFieldType,
  GroupPropsType,
} from '@core/formly/models/form-field-item';

import { FormFieldBaseBuilder } from './base/base-field.builder';

export class GroupFieldBuilder extends FormFieldBaseBuilder<GroupPropsType> {
  private fieldGroup: AnyFieldType[] = [];

  constructor() {
    super({ cols: 1, label: '' });
  }
  newInstance(): GroupFieldBuilder {
    return new GroupFieldBuilder();
  }
  setCols(cols: number) {
    this.field.props.cols = cols;
    return this;
  }

  setFieldGroup(fields: AnyFieldType[]) {
    this.fieldGroup = fields;
    return this;
  }

  override build(): GroupFieldType {
    return {
      ...super.build(),
      type: FormType.Group,
      fieldGroup: this.fieldGroup,
    };
  }
}
