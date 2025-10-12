import { DividerFieldType, FormType } from '@core/formly/models/form-field-item';

import { BaseFieldBuilder } from './base/base-field.builder';

export class DividerFieldBuilder extends BaseFieldBuilder<object, DividerFieldBuilder> {
  constructor() {
    super({});
  }

  newInstance(): DividerFieldBuilder {
    return new DividerFieldBuilder();
  }

  override build(): DividerFieldType {
    return {
      ...super.build(),
      type: FormType.divider,
      props: this.props,
    };
  }
}
