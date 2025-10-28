import { CdkDrag, CdkDragPlaceholder } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { FormType } from '@core/formly/models/form-field-item';
import { UIICon } from '@shared/components/index';
import { MenuItemType } from '@shared/types/ui.types';

@Component({
  selector: 'form-element-item',
  imports: [CommonModule, CdkDrag, CdkDragPlaceholder, UIICon],
  templateUrl: './form-element-item.html',
})
export class FormElementItem {
  item = input.required<MenuItemType<FormType>>();
  whileDragging = signal<boolean>(false);
}
