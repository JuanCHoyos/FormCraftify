import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormType } from '@core/formly/models/form-field-item';
import { UIICon } from '@shared/components/index';
import { MenuItemType } from '@shared/types/ui.types';

@Component({
  selector: 'form-element-item',
  imports: [CommonModule, UIICon],
  templateUrl: './form-element-item.html',
})
export class FormElementItem {
  item = input.required<MenuItemType<FormType>>();
}
