import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldWrapper, FormlyField } from '@ngx-formly/core';
import { UITitle } from '@shared/components';
import { HeadingType } from '@shared/types/ui.types';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'tabs-wrapper',
  imports: [CommonModule, FormlyField, TabsModule, UITitle],

  templateUrl: './tabs-wrapper.html',
})
export class TabsWrapper extends FieldWrapper {
  HeadingType = HeadingType;
}
