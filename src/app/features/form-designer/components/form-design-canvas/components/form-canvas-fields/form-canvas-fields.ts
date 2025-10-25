import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { FieldBuilderFactory } from '@core/formly/factory/field-builder-factory';
import { AnyFieldType, FormType, GroupFieldType } from '@core/formly/models/form-field-item';
import {
  MoveItemBetweenGroupsOptions,
  MoveItemInTreeOptions,
} from '@features/form-designer/services/field-tree.utils';
import { FormDesignerStore } from '@features/form-designer/services/form-designer-store';
import { SortablejsModule } from 'nxt-sortablejs';
import { SortableEvent, SortableOptions } from 'sortablejs';

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
  ],
  templateUrl: './form-canvas-fields.html',
})
export class FormCanvasFields {
  private readonly formDesignerStore = inject(FormDesignerStore);
  groupField = input.required<GroupFieldType>();
  cols = computed<number>(() => this.groupField().props.cols || 1);
  fields = computed(() => structuredClone(this.groupField().fieldGroup));
  FormType = FormType;

  sortableConfig: SortableOptions = {
    group: {
      name: 'nested',
      put: true,
    },
    animation: 300,
    sort: true,
    handle: '.handle',
    fallbackOnBody: true,
    ghostClass: 'example-custom-placeholder',
    swapThreshold: 0.75,
    removeCloneOnHide: true,
    onAdd: (event: SortableEvent) => this.handleAddEvent(event),
    onUpdate: (event: SortableEvent) => this.handleUpdateEvent(event),
  };

  private extractSortableData(event: SortableEvent) {
    const { oldIndex: fromIndex, newIndex: toIndex, from, to } = event;
    if (fromIndex === undefined || toIndex === undefined) return null;
    return { fromIndex, toIndex, source: from.id, target: to.id };
  }

  private handleAddEvent(event: SortableEvent): void {
    const data = this.extractSortableData(event);
    if (!data) return;

    const formType = event.item.getAttribute('field-type') as FormType | null;
    if (formType) return this.createAndAddNewField(formType, data.toIndex);

    this.dispatchMoveBetweenGroups(data);
  }

  private handleUpdateEvent(event: SortableEvent): void {
    const data = this.extractSortableData(event);
    if (!data) return;
    this.dispatchMoveWithinGroup(data);
  }

  createAndAddNewField(formType: FormType, toIndex: number): void {
    const newField = new FieldBuilderFactory().create(formType).build();
    this.addFieldToGroup(newField, toIndex);
  }

  addFieldToGroup(newField: AnyFieldType, toIndex: number): void {
    this.formDesignerStore.addFieldToGroup({
      target: this.groupField().key,
      field: newField,
      toIndex,
    });
  }

  remove(field: AnyFieldType) {
    console.log('1111');
    this.formDesignerStore.remove({
      key: field.key,
      target: this.groupField().key,
    });
  }

  clone(field: AnyFieldType) {
    console.log('11112');
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
