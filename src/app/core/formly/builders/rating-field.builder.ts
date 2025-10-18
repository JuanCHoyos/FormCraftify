import {
  FormType,
  RatingFieldType,
  RatingPropsType,
  RatingType,
  WrapperType,
} from '@core/formly/models/form-field-item';

import { BaseFieldBuilder } from './base/base-field.builder';

export class RatingFieldBuilder extends BaseFieldBuilder<RatingPropsType, RatingFieldBuilder> {
  constructor() {
    super({
      type: RatingType.Numbers,
      stars: 5,
      required: true,
    });
  }

  newInstance(): RatingFieldBuilder {
    return new RatingFieldBuilder();
  }

  setType(type: RatingType) {
    this.props.type = type;
    return this;
  }

  setStarts(stars: number) {
    this.props.stars = stars;
    return this;
  }

  override build(): RatingFieldType {
    return {
      ...super.build(),
      type: FormType.rating,
      props: this.props,
      wrappers: [WrapperType.Field],
    };
  }
}
