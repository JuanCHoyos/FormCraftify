import { CdkDrag, CdkDragDrop, CdkDragPlaceholder, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { FieldBuilderFactory } from '@core/formly/factory/field-builder-factory';
import { AnyFieldType, FormType, GroupFieldType } from '@core/formly/models/form-field-item';
import {
  MoveItemBetweenGroupsOptions,
  MoveItemInTreeOptions,
} from '@features/form-designer/services/field-tree.utils';
import { FormDesignerStore } from '@features/form-designer/services/form-designer-store';
import { SortablejsModule } from 'nxt-sortablejs';

import { FieldLayoutManager } from '../../layouts/form-canvas-field-layout/form-canvas-field-layout';
import { FormCanvasEmptyMessage } from '../form-canvas-empty-message/form-canvas-empty-message';
import { FormCanvasField } from '../form-canvas-field/form-canvas-field';
@Component({
  selector: 'form-canvas-fields',
  imports: [
    CommonModule,
    FieldLayoutManager,
    FormCanvasEmptyMessage,
    FormCanvasField,
    SortablejsModule,
    CdkDropList,
    CdkDrag,
    CdkDragPlaceholder,
  ],
  templateUrl: './form-canvas-fields.html',
})
export class FormCanvasFields {
  public readonly formDesignerStore = inject(FormDesignerStore);
  groupField = input.required<GroupFieldType>();
  fields = computed(() => structuredClone(this.groupField().fieldGroup));
  whileDragging = signal<boolean>(false);
  FormType = FormType;

  drop(event: CdkDragDrop<AnyFieldType[]>) {
    const { previousContainer, previousIndex, container, currentIndex, item } = event;
    if (event.previousContainer === event.container) {
      return this.dispatchMoveWithinGroup({
        fromIndex: previousIndex,
        toIndex: currentIndex,
        target: container.id,
      });
    }

    if (previousContainer.id.includes('accordion')) {
      const newField = new FieldBuilderFactory().create(item.data).build();
      return this.addFieldToGroup(newField, currentIndex);
    }
    return this.dispatchMoveBetweenGroups({
      fromIndex: previousIndex,
      source: previousContainer.id,
      target: container.id,
      toIndex: currentIndex,
    });
  }

  addFieldToGroup(newField: AnyFieldType, toIndex: number): void {
    this.formDesignerStore.addFieldToGroup({
      target: this.groupField().key,
      field: newField,
      toIndex,
    });
  }

  remove(field: AnyFieldType) {
    this.formDesignerStore.remove({
      key: field.key,
      target: this.groupField().key,
    });
  }

  clone(field: AnyFieldType) {
    this.formDesignerStore.clone({
      key: field.key,
      target: this.groupField().key,
    });
  }

  dispatchMoveBetweenGroups(payload: MoveItemBetweenGroupsOptions): void {
    this.formDesignerStore.dispatchMoveBetweenGroups(payload);
  }

  dispatchMoveWithinGroup(payload: MoveItemInTreeOptions): void {
    this.formDesignerStore.dispatchMoveWithinGroup(payload);
  }
}
