import { computed, effect, inject, Injectable, signal, untracked } from '@angular/core';
import {
  AnyFieldType,
  FormFieldType,
  FormType,
  FormViewWrapperType,
  GroupFieldType,
  WrapperType,
} from '@core/formly/models/form-field-item';
import { ToastManager } from '@core/services/toast-manager';
import { UITreeNodeType, UITreeType } from '@shared/types/ui-tree';

import { FORM_ELEMENTS_ICONS } from '../constants/form-elements';
import {
  AddItemOptions,
  CloneItemOptions,
  FieldActionType,
  findField,
  findFieldGroup,
  manageFieldGroupActions,
  MoveItemBetweenGroupsOptions,
  MoveItemInTreeOptions,
  RemoveItemOptions,
} from './field-tree.utils';
import { FormDesignerHistory } from './form-designer-history';

@Injectable({
  providedIn: 'root',
})
export class FormDesignerStore {
  private readonly toastManager = inject(ToastManager);
  public readonly FormDesignerHistory = new FormDesignerHistory();
  fields = signal<FormFieldType>({
    id: 'dsfgsdf',
    key: 'dsfgsdf',
    type: FormType.Group,
    wrappers: [FormViewWrapperType.Accordion],
    props: {
      label: 'Formularios para todos',
    },
    fieldGroup: [
      {
        id: 'userInfo333',
        key: 'userInfo333',
        type: FormType.Group,
        wrappers: [WrapperType.Field],
        props: {
          cols: 1,
          label: 'User Information',
        },
        fieldGroup: [],
      },
      {
        id: 'contact',
        key: 'contact',
        type: FormType.Group,
        wrappers: [WrapperType.Field],
        props: {
          cols: 1,
          label: 'Contact',
        },
        fieldGroup: [],
      },
    ],
  });

  fieldTree = computed<UITreeType>(() => ({
    label: this.fields().props.label,
    nodes: this.fields().fieldGroup.map((group, index) => this.mapFormToTree(group, index)),
  }));
  fieldGroupKeys = computed(() => this.getGroupKeys(this.fields().fieldGroup));

  getGroupKeys(fields: GroupFieldType[] = []): string[] {
    const keys: string[] = [];

    for (const field of fields) {
      if (field.type === FormType.Group) {
        keys.push(field.key);
        if (Array.isArray(field.fieldGroup)) {
          keys.push(...this.getGroupKeys(field.fieldGroup as GroupFieldType[]));
        }
      }
    }

    return keys;
  }

  constructor() {
    effect(() => {
      const fields = this.fields();
      untracked(() => {
        this.FormDesignerHistory.save(fields);
      });
    });
  }

  mapFormToTree(field: GroupFieldType, index: number): UITreeNodeType {
    const nodesArray = 'fieldGroup' in field ? (field.fieldGroup as GroupFieldType[]) : [];

    const nodes: UITreeNodeType[] = nodesArray.map((field, _index) =>
      this.mapFormToTree(field, _index),
    );
    const fieldWithNodes = new Set([FormType.Group, FormType.Field]);
    const isDroppable = fieldWithNodes.has(field.type);
    return {
      key: field.key,
      label: field.props?.label,
      icon: FORM_ELEMENTS_ICONS[field.type],
      data: { ...field, oldIndex: index },
      children: isDroppable ? nodes : undefined,
      droppable: isDroppable,
    };
  }

  redo() {
    const field = this.FormDesignerHistory.redo();
    if (!field) return;
    this.fields.set(field);
  }

  undo() {
    const field = this.FormDesignerHistory.undo();
    if (!field) return;
    this.fields.set(field);
  }

  canAddGroupAtLevel(newField: AnyFieldType, target: string) {
    const group = findFieldGroup(this.fields().fieldGroup, target);
    if (!group) return false;
    return group.level < 2 || newField.type !== FormType.Group;
  }

  showGroupNestingWarning() {
    this.toastManager.warning({
      header: 'Warning',
      message: 'No es posible agregar un grupo dentro de otro',
    });
  }

  addFieldToGroup(payload: AddItemOptions): void {
    if (!this.canAddGroupAtLevel(payload.field, payload.target)) {
      return this.showGroupNestingWarning();
    }
    this.handleFieldActionDispatch({
      type: 'ADD_FIELD',
      payload,
    });
  }

  remove(payload: RemoveItemOptions) {
    this.handleFieldActionDispatch({
      type: 'REMOVE_FIELD',
      payload,
    });
  }

  clone(payload: CloneItemOptions) {
    this.handleFieldActionDispatch({
      type: 'CLONE_FIELD',
      payload,
    });
  }

  dispatchMoveBetweenGroups(options: MoveItemBetweenGroupsOptions): void {
    const { source, fromIndex, target, toIndex } = options;
    const oldField = findField(this.fields().fieldGroup, { index: fromIndex, target: source });
    if (!oldField) return;
    if (!this.canAddGroupAtLevel(oldField, target)) return this.showGroupNestingWarning();
    this.addFieldToGroup({ field: oldField, target, toIndex });
    this.remove({ key: oldField.key, target: source });
  }

  dispatchMoveWithinGroup(options: MoveItemInTreeOptions): void {
    this.handleFieldActionDispatch({
      type: 'MOVE_WITHIN_GROUP',
      payload: options,
    });
  }

  handleFieldActionDispatch(action: FieldActionType) {
    this.fields.update((field) => ({
      ...field,
      fieldGroup: manageFieldGroupActions(this.fields().fieldGroup, action),
    }));
  }
}
