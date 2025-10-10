import { CommonModule } from '@angular/common';
import { Component, effect, input, signal } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Heading, UITitle } from '@shared/index';
import { SortablejsModule } from 'nxt-sortablejs';
import { SortableOptions } from 'sortablejs';

import { AddComponentPlaceholder } from '../add-component-placeholder/add-component-placeholder';
import { FormCanvasEmptyMessage } from '../empty-message/canvas-empty-message';
import { FormCanvasField } from '../form-canvas-field/form-canvas-field';

@Component({
  selector: 'app-form-canvas-fields',
  imports: [
    CommonModule,
    SortablejsModule,
    FormCanvasEmptyMessage,
    FormCanvasField,
    AddComponentPlaceholder,
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
  fields = input.required<FormlyFieldConfig[]>();
  title = input<string | undefined>('');
  Heading = Heading;
  isDragOver = signal<boolean>(false);
  constructor() {
    effect(() => {
      this.fields();
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
  };
}
