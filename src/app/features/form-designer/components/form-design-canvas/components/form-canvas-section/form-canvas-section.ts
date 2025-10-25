import { CommonModule } from '@angular/common';
import { Component, inject, model, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AnyFieldType, GroupFieldType } from '@core/formly/models/form-field-item';
import { FormDesignerStore } from '@features/form-designer/services/form-designer-store';
import { UITitle } from '@shared/components';
import { HeadingType } from '@shared/types/ui.types';

import { FormCanvasAddElementPlaceholder } from '../form-canvas-add-element-placeholder/form-canvas-add-element-placeholder';
import { FormCanvasFields } from '../form-canvas-fields/form-canvas-fields';

@Component({
  selector: 'app-form-canvas-section',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormCanvasAddElementPlaceholder,
    FormCanvasFields,
    UITitle,
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
}
