import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { UIICon } from '@shared/components/index';
import { MenuItemType } from '@shared/types/ui.types';

@Component({
  selector: 'app-form-field-item',
  imports: [CommonModule, UIICon],
  templateUrl: './form-field-item.html',
})
export class FormFieldItem {
  item = input.required<MenuItemType>();
}
