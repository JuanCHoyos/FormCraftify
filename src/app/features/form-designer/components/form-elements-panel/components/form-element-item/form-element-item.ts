import { CdkDrag, CdkDragPlaceholder } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { FieldBuilderFactory } from '@core/formly/factory/field-builder-factory';
import { AnyFieldType, FormType } from '@core/formly/models/form-field-item';
import { UIICon } from '@shared/components/index';
import { MenuItemType } from '@shared/types/ui.types';

@Component({
  selector: 'form-element-item',
  imports: [CommonModule, CdkDrag, CdkDragPlaceholder, UIICon],
  templateUrl: './form-element-item.html',
})
export class FormElementItem {
  item = input.required<MenuItemType<FormType>>();
  field = computed<AnyFieldType | null>(() => {
    const formType = this.item().value;
    if (!formType) return null;
    return new FieldBuilderFactory().create(formType).build();
  });
  whileDragging = signal<boolean>(false);
}
