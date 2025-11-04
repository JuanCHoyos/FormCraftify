import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldWrapper, FormlyField } from '@ngx-formly/core';
import { UITitle } from '@shared/components';
import { HeadingType } from '@shared/types/ui.types';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'card-wrapper',
  imports: [CommonModule, FormlyField, CardModule, UITitle],

  templateUrl: './card-wrapper.html',
})
export class CardWrapper extends FieldWrapper {
  HeadingType = HeadingType;
}
