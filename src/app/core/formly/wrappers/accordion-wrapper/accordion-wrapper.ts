import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldWrapper, FormlyField } from '@ngx-formly/core';
import { UIICon, UITitle } from '@shared/components';
import { HeadingType } from '@shared/types/ui.types';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'accordion-wrapper',
  imports: [CommonModule, FormlyField, AccordionModule, ButtonModule, UIICon, UITitle],

  templateUrl: './accordion-wrapper.html',
})
export class AccordionWrapper extends FieldWrapper {
  HeadingType = HeadingType;
}
