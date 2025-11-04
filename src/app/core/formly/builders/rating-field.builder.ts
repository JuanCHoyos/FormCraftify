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
      type: RatingType.Stars,
      stars: 10,
      disabled: false,
      readonly: false,
      required: false,
      tabindex: 0,
      description: 'Indica tu nivel de satisfacción del 1 al 10.',
      label: 'Calificación',
      tooltip: 'Selecciona una puntuación entre 1 y 10.',
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
