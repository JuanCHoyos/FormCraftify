import { CommonModule } from '@angular/common';
import { Component, effect, Input, input, signal } from '@angular/core';
import { FieldBuilderFactory } from '@core/formly/factory/field-builder-factory';
import { AnyFieldType, FormType } from '@core/formly/models/form-field-item';
import { UITitle } from '@shared/components/index';
import { HeadingType } from '@shared/types/ui.types';
import { SortablejsModule } from 'nxt-sortablejs';
import { SortableEvent, SortableOptions } from 'sortablejs';

import { FormCanvasAddElementPlaceholder } from '../form-canvas-add-element-placeholder/form-canvas-add-element-placeholder';
import { FormCanvasEmptyMessage } from '../form-canvas-empty-message/form-canvas-empty-message';
import { FormCanvasField } from '../form-canvas-field/form-canvas-field';

@Component({
  selector: 'app-form-canvas-fields',
  imports: [
    CommonModule,
    SortablejsModule,
    FormCanvasEmptyMessage,
    FormCanvasField,
    FormCanvasAddElementPlaceholder,
    UITitle,
  ],
  host: {
    '(dragenter)': 'onDragStateChange(true, $event)',
    '(dragover)': 'onDragStateChange(true, $event)',
    '(dragleave)': 'onDragStateChange(false, $event)',
    '(drop)': 'onDragStateChange(false, $event)',
    '(dragend)': 'onDragStateChange(false, $event)',
  },
  templateUrl: './form-canvas-fields.html',
})
export class FormCanvasFields {
  _fields = signal<AnyFieldType[]>([]);
  @Input() set fields(fields: AnyFieldType[]) {
    this._fields.set(fields);
  }
  title = input<string | undefined>('');
  HeadingType = HeadingType;
  isDragOver = signal<boolean>(false);
  constructor() {
    effect(() => {
      console.log(this._fields(), 'aa');
    });
  }

  onDragStateChange(isInside: boolean, event: DragEvent) {
    const target = event.currentTarget as HTMLElement;
    const related = event.relatedTarget as HTMLElement | null;
    if (related && target.contains(related)) return;

    this.isDragOver.set(isInside);
  }

  sortableConfig: SortableOptions = {
    group: {
      name: 'nested',
      put: true,
    },
    animation: 300,
    sort: true,
    handle: '.handle',
    fallbackOnBody: true,
    ghostClass: 'ghost-element',
    swapThreshold: 0.5,
    onAdd: (event: SortableEvent) => {
      const formType = event.item.getAttribute('field-type') as FormType;
      if (!formType) return;
      const newField = new FieldBuilderFactory().create(formType).setDescription('Write something');

      const fields = [...this._fields()];
      fields.splice(event.newIndex ?? 0, 1, newField.build());
      this._fields.set(fields);
    },
  };
}
