import { CommonModule } from '@angular/common';
import { Component, signal, viewChild } from '@angular/core';
import { FieldBuilderFactory } from '@core/formly/factory/field-builder-factory';
import { FormType } from '@core/formly/models/form-field-item';
import { FORM_ELEMENT_CATEGORIES } from '@features/form-designer/constants/form-elements';
import { UIICon, UIMenuPopover } from '@shared/components/index';
import { TreeMenuType } from '@shared/types/ui.types';
@Component({
  selector: 'app-form-canvas-add-element-placeholder',
  imports: [CommonModule, UIICon, UIMenuPopover],
  templateUrl: './form-canvas-add-element-placeholder.html',
})
export class FormCanvasAddElementPlaceholder {
  private readonly menuPopover = viewChild.required<UIMenuPopover>('fieldListMenuTemplate');
  formElementCategories = signal<TreeMenuType<FormType>[]>(
    FORM_ELEMENT_CATEGORIES.map((category) => ({
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
    const newField = new FieldBuilderFactory().create(formType).setDescription('Write something');
    console.log(newField.build(), `${newField.build()} add`);
  }
}
