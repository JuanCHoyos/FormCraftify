import { CommonModule } from '@angular/common';
import { Component, inject, model, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AnyFieldType, GroupFieldType } from '@core/formly/models/form-field-item';
import { FormDesignerStore } from '@features/form-designer/services/form-designer-store';
import { HeadingType } from '@shared/types/ui.types';

import { FieldLayoutManager } from '../../layouts/form-canvas-field-layout/form-canvas-field-layout';
import { FormCanvasAddElementPlaceholder } from '../form-canvas-add-element-placeholder/form-canvas-add-element-placeholder';
import { FormCanvasFields } from '../form-canvas-fields/form-canvas-fields';

@Component({
  selector: 'app-form-canvas-section',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormCanvasAddElementPlaceholder,
    FormCanvasFields,
    FieldLayoutManager,
  ],
  templateUrl: './form-canvas-section.html',
})
export class FormCanvasSection {
  private readonly formDesignerStore = inject(FormDesignerStore);
  groupField = model.required<GroupFieldType>();
  HeadingType = HeadingType;
  whileDragging = signal<boolean>(false);

  addElement(newField: AnyFieldType) {
    this.formDesignerStore.handleFieldActionDispatch({
      type: 'ADD_FIELD',
      payload: {
        target: this.groupField().key,
        field: newField,
      },
    });
  }

  remove() {
    this.formDesignerStore.remove({
      key: this.groupField().key,
      target: this.formDesignerStore.fields().key,
    });
  }

  clone() {
    this.formDesignerStore.clone({
      key: this.groupField().key,
      target: this.formDesignerStore.fields().key,
    });
  }
}
