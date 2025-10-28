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
  styles: `
    .cdk-drag-preview {
      padding: 4px 8px;
      background: var(--p-primary-100);
      border: 1px solid var(--p-primary-500) !important;
      box-shadow:
        0 5px 5px -3px rgba(0, 0, 0, 0.2),
        0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }
  `,
})
export class FormElementItem {
  item = input.required<MenuItemType<FormType>>();
  whileDragging = signal<boolean>(false);
}
