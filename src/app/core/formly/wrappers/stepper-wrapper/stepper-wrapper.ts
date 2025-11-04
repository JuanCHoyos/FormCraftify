import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldWrapper, FormlyField } from '@ngx-formly/core';
import { UITitle } from '@shared/components';
import { HeadingType } from '@shared/types/ui.types';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';

@Component({
  selector: 'stepper-wrapper',
  imports: [CommonModule, ButtonModule, FormlyField, StepperModule, UITitle],

  templateUrl: './stepper-wrapper.html',
})
export class StepperWrapper extends FieldWrapper {
  HeadingType = HeadingType;
}
