import {
  FormType,
  RatingFieldType,
  RatingPropsType,
  RatingType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { FormFieldBaseBuilder } from './base/base-field.builder';

export class RatingFieldBuilder extends FormFieldBaseBuilder<RatingPropsType> {
  constructor() {
    super({
      type: RatingType.Numbers,
      stars: 5,
      disabled: false,
      readonly: false,
      required: false,
      tabindex: 0,
      description: '',
      label: '',
      tooltip: '',
    });
  }

  newInstance(): RatingFieldBuilder {
    return new RatingFieldBuilder();
  }

  setType(type: RatingType) {
    this.field.props.type = type;
    return this;
  }

  setStarts(stars: number) {
    this.field.props.stars = stars;
    return this;
  }

  override build(): RatingFieldType {
    return {
      ...super.build(),
      type: FormType.Rating,
      wrappers: [WrapperType.Field],
    };
  }
}
