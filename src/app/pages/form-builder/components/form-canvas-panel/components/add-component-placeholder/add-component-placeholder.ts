import { CommonModule } from '@angular/common';
import { Component, signal, viewChild } from '@angular/core';
import { FieldBuilderFactory } from '@core/formly/factory/field-builder-factory';
import { FormType } from '@core/formly/models/form-field-item';
import { FORM_FIELD_CATEGORIES } from '@pages/form-builder/constans/field-items';
import { UIICon, UIMenuPopover } from '@shared/components/index';
import { TreeMenuType } from '@shared/types/ui.types';
@Component({
  selector: 'app-add-component-placeholder',
  imports: [CommonModule, UIICon, UIMenuPopover],
  templateUrl: './add-component-placeholder.html',
})
export class AddComponentPlaceholder {
  private readonly menuPopover = viewChild.required<UIMenuPopover>('fieldListMenuTemplate');
  formFieldCategories = signal<TreeMenuType<FormType>[]>(
    FORM_FIELD_CATEGORIES.map((category) => ({
      ...category,
      items: category.items.map((item) => ({
        ...item,
        handle: () => this.handle(item.value!),
      })),
    })),
  );
  toggleFieldListPopover(target: PointerEvent | Event) {
    this.menuPopover().toggle(target);
  }

  handle(formType: FormType) {
    const newField = new FieldBuilderFactory().create(formType).setDescription('Escriba algo');
    console.log(newField.build(), `${newField.build()} add`);
  }
}
