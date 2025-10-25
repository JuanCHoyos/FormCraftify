import { CommonModule } from '@angular/common';
import { Component, output, signal, viewChild } from '@angular/core';
import { FieldBuilderFactory } from '@core/formly/factory/field-builder-factory';
import { AnyFieldType, FormType } from '@core/formly/models/form-field-item';
import { FORM_ELEMENT_CATEGORIES } from '@features/form-designer/constants/form-elements';
import { UIICon, UIMenuPopover } from '@shared/components/index';
import { TreeMenuType } from '@shared/types/ui.types';
@Component({
  selector: 'app-form-canvas-add-element-placeholder',
  imports: [CommonModule, UIICon, UIMenuPopover],
  templateUrl: './form-canvas-add-element-placeholder.html',
})
export class FormCanvasAddElementPlaceholder {
  addElement = output<AnyFieldType>();
  private readonly menuPopover = viewChild.required<UIMenuPopover>('fieldListMenuTemplate');
  formElementCategories = signal<TreeMenuType<FormType>[]>(
    FORM_ELEMENT_CATEGORIES.map((category) => ({
      ...category,
      items: category.items.map((item) => ({
        ...item,
        handle: () => this.addElementFromFormType(item.value!),
      })),
    })),
  );
  toggleFieldListPopover(target: PointerEvent | Event) {
    this.menuPopover().toggle(target);
  }

  addElementFromFormType(formType: FormType) {
    const newField = new FieldBuilderFactory().create(formType);
    this.addElement.emit(newField.build());
  }
}
