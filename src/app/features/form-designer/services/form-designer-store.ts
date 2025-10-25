import { computed, effect, Injectable, signal } from '@angular/core';
import {
  AlignType,
  FormFieldType,
  FormType,
  FormViewWrapperType,
  GroupFieldType,
  SeverityType,
  WrapperType,
} from '@core/formly/models/form-field-item';
import { UITreeNode } from '@shared/types/ui-tree';

import { FORM_ELEMENTS_ICONS } from '../constants/form-elements';
import {
  AddItemOptions,
  CloneItemOptions,
  FieldActionType,
  findField,
  manageFieldGroupActions,
  MoveItemBetweenGroupsOptions,
  MoveItemInTreeOptions,
  RemoveItemOptions,
} from './field-tree.utils';

@Injectable({
  providedIn: 'root',
})
export class FormDesignerStore {
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
        id: 'userInfo1',
        key: 'userInfo1',
        type: FormType.Group,
        props: {
          cols: 1,
          label: 'User Information 1',
        },
        fieldGroup: [
          {
            id: '1111111',
            key: 'multi33',
            type: FormType.Group,
            props: {
              label: 'MULTI GRUPO',
              cols: 2,
            },
            fieldGroup: [
              {
                id: '111111',
                key: 'firstName43',
                type: FormType.Alert,
                wrappers: [WrapperType.Field],
                props: {
                  label: 'First Name',
                  align: AlignType.Left,
                  severity: SeverityType.Info,
                  textFormattingOptions: [],
                },
              },
              {
                id: '111',
                key: 'firsa',
                type: FormType.Text,
                wrappers: [WrapperType.Field],
                props: {
                  label: 'First Name',
                  description: 'Enter your first name',
                  tooltip: 'Your given name',
                  required: true,
                  readonly: false,
                  disabled: false,
                  tabindex: 1,
                  minLength: 0,
                  maxLength: 1000,
                  placeholder: 'aaaaa',
                },
              },
              {
                id: 'firstName2',
                key: 'firstName2',
                type: FormType.Alert,
                wrappers: [WrapperType.Field],
                props: {
                  label: 'Alerta de error',
                  align: AlignType.Center,
                  severity: SeverityType.Error,
                  textFormattingOptions: [],
                },
              },
            ],
          },
          {
            id: 'firstName232231322',
            key: 'firstName232231322',
            type: FormType.Text,
            wrappers: [WrapperType.Field],
            props: {
              label: 'Noertwertwertrewmbre',
              description: 'etwrtrt',
              tooltip: 'Your given name',
              required: true,
              readonly: false,
              disabled: false,
              tabindex: 1,
              placeholder: 'John',
              minLength: 2,
              maxLength: 50,
            },
          },
          {
            id: 'firstName23223322',
            key: 'firstName23223322',
            type: FormType.Text,
            wrappers: [WrapperType.Field],
            props: {
              label: 'Nombre',
              description: 'Enter your first name',
              tooltip: 'Your given name',
              required: true,
              readonly: false,
              disabled: false,
              tabindex: 1,
              placeholder: 'John',
              minLength: 2,
              maxLength: 50,
            },
          },
          {
            id: 'firstName31241234132424',
            key: 'firstName31241234132424',
            type: FormType.Alert,
            wrappers: [WrapperType.Field],
            props: {
              label: 'Alerta informativa',
              align: AlignType.Left,
              severity: SeverityType.Info,
              textFormattingOptions: [],
            },
          },
        ],
      },
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
    ],
  });

  fieldTree = computed<UITreeNode[]>(() => [this.mapFormToTree(this.fields())]);

  constructor() {
    effect(() => {
      console.log(this.fields(), 'initial fields');
    });
  }

  mapFormToTree(field: FormFieldType | GroupFieldType): UITreeNode {
    if (!field) return field;
    const nodesArray = 'fieldGroup' in field ? (field.fieldGroup as GroupFieldType[]) : [];

    const nodes: UITreeNode[] = nodesArray.map((field) => this.mapFormToTree(field));
    const fieldWithNodes = new Set([FormType.Group, FormType.Field]);
    const isDroppable = fieldWithNodes.has(field.type);
    return {
      key: field.key,
      label: field.props?.label,
      icon: FORM_ELEMENTS_ICONS[field.type],
      data: field.type,
      children: isDroppable ? nodes : undefined,
      droppable: isDroppable,
    };
  }

  addFieldToGroup(payload: AddItemOptions): void {
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
    this.remove({ key: oldField.key, target: source });
    this.addFieldToGroup({ field: oldField, target, toIndex });
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
