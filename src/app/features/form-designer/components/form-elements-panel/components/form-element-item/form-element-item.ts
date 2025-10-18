import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { UIICon } from '@shared/components/index';
import { MenuItemType } from '@shared/types/ui.types';

@Component({
  selector: 'app-form-element-item',
  imports: [CommonModule, UIICon],
  templateUrl: './form-element-item.html',
})
export class FormElementItem {
  item = input.required<MenuItemType>();
}
