import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingPropsType } from '@core/formly/models/form-field-item';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { UIRating } from '@shared/components';
import { RatingModule } from 'primeng/rating';

import { RatingType } from '../../models/form-field-item';

@Component({
  selector: 'input-field-rating',
  imports: [UIRating, RatingModule, ReactiveFormsModule],
  templateUrl: './input-field-rating.html',
})
export class InputFieldRating extends FieldType<FieldTypeConfig<RatingPropsType>> {
  RatingType = RatingType;
}
