import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AnyFieldType, FormType, GroupFieldType } from '@core/formly/models/form-field-item';

import { FormCanvasFields } from '../form-canvas-fields/form-canvas-fields';

@Component({
  selector: 'app-form-canvas-section',
  imports: [CommonModule, ReactiveFormsModule, FormCanvasFields],
  templateUrl: './form-canvas-section.html',
})
export class FormCanvasSection {
  field = input.required<AnyFieldType>();
  fieldss = computed<GroupFieldType | undefined>(() => {
    if ('fieldGroup' in this.field()) {
      return this.field() as GroupFieldType;
    }

    return undefined;
  });

  FormType = FormType;

  a() {
    const field = this.field();
    if (this.isGroupField(field) && 'fieldGroup' in field) {
      field.fieldGroup = [];
    }
  }

  isGroupField(field: AnyFieldType): field is GroupFieldType {
    return field.type === FormType.group;
  }
}
