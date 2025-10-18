import { CommonModule } from '@angular/common';
import { Component, computed, forwardRef, input, signal } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';
import { RatingType } from '@core/formly/models/form-field-item';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'ui-rating',
  imports: [CommonModule, RatingModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UIRating),
      multi: true,
    },
  ],
  templateUrl: './ui-rating.html',
})
export class UIRating implements ControlValueAccessor {
  stars = input.required<number>();
  formControl = input.required<UntypedFormControl>();
  type = input<RatingType>(RatingType.Stars);
  value = signal<number | null>(null);
  maxRatingLevels = computed<number[]>(() => new Array(this.stars()).fill(0));
  disabled = signal<boolean>(false);
  RatingType = RatingType;
  onTouched: () => void = () => {
    /**/
  };
  onChangeFn: (value: number | null) => void = () => {
    /**/
  };

  writeValue(value: number | null): void {
    if (value) {
      this.value.set(value);
    }
  }

  registerOnChange(fn: (value: number | null) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  setRating(value: number) {
    const newValue = this.value() === value ? null : value;
    this.value.set(newValue);
    this.writeValue(newValue);
    this.onChangeFn(newValue);
    this.onTouched();
  }
}
