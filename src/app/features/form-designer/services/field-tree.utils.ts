import { FieldBuilderFactory } from '@core/formly/factory/field-builder-factory';
import { AnyFieldType, FormType, GroupFieldType } from '@core/formly/models/form-field-item';
export interface AddItemOptions {
  target: string;
  field: AnyFieldType;
  toIndex?: number;
}

export interface RemoveItemOptions {
  target: string;
  key: string;
}

export interface UpdateItemOptions {
  target: string;
  key: string;
  field: AnyFieldType;
}

export interface CloneItemOptions {
  target: string;
  key: string;
}

export interface MoveItemInTreeOptions {
  target: string;
  fromIndex: number;
  toIndex: number;
}

export interface MoveItemBetweenGroupsOptions {
  source: string;
  target: string;
  fromIndex: number;
  toIndex: number;
}

export type FieldActionType =
  | { type: 'ADD_FIELD'; payload: AddItemOptions }
  | { type: 'REMOVE_FIELD'; payload: RemoveItemOptions }
  | { type: 'UPDATE_FIELD'; payload: UpdateItemOptions }
  | { type: 'CLONE_FIELD'; payload: CloneItemOptions }
  | { type: 'MOVE_WITHIN_GROUP'; payload: MoveItemInTreeOptions };

export const addFieldToGroup = (
  fieldGroup: AnyFieldType[],
  { field: newField, toIndex }: AddItemOptions,
): AnyFieldType[] => {
  const insertionPosition = toIndex ?? fieldGroup.length;
  return [
    ...fieldGroup.slice(0, insertionPosition),
    newField,
    ...fieldGroup.slice(insertionPosition),
  ];
};

const duplicateFieldInGroup = (
  fields: AnyFieldType[],
  { key, target }: CloneItemOptions,
): AnyFieldType[] => {
  const originalIndex = fields.findIndex((f) => f.key === key);
  if (originalIndex === -1) return fields;

  const originalField = fields[originalIndex];
  const clonedField = new FieldBuilderFactory()
    .create(originalField.type)
    .copyWith(originalField.props)
    .build();

  return addFieldToGroup(fields, {
    field: clonedField,
    target,
    toIndex: originalIndex + 1,
  });
};

const updateFieldFromGroup = (
  fieldGroup: AnyFieldType[],
  { key, field }: UpdateItemOptions,
): AnyFieldType[] => {
  return fieldGroup.map((_field) => (key === _field.key ? field : _field));
};

const removeFieldFromGroup = (
  fieldGroup: AnyFieldType[],
  { key }: RemoveItemOptions,
): AnyFieldType[] => {
  return fieldGroup.filter((field) => key !== field.key);
};

const swapFieldInGroup = (
  fieldGroup: AnyFieldType[],
  { toIndex, fromIndex }: MoveItemInTreeOptions,
): AnyFieldType[] => {
  const item = fieldGroup[fromIndex];
  const withoutItem = fieldGroup.filter((_, i) => i !== fromIndex);
  return [...withoutItem.slice(0, toIndex), item, ...withoutItem.slice(toIndex)];
};

const fieldGroupHandlers: {
  [K in FieldActionType['type']]: (
    fieldGroups: AnyFieldType[],
    payload: Extract<FieldActionType, { type: K }>['payload'],
  ) => AnyFieldType[];
} = {
  ADD_FIELD: addFieldToGroup,
  REMOVE_FIELD: removeFieldFromGroup,
  UPDATE_FIELD: updateFieldFromGroup,
  CLONE_FIELD: duplicateFieldInGroup,
  MOVE_WITHIN_GROUP: swapFieldInGroup,
};

const handleFieldGroupChanges = (
  group: GroupFieldType,
  action: FieldActionType,
): AnyFieldType[] => {
  const { target } = action.payload;

  if (group.key === target) {
    const handler = fieldGroupHandlers[action.type] as (
      fieldGroups: AnyFieldType[],
      payload: typeof action.payload,
    ) => AnyFieldType[];
    return handler(group.fieldGroup, action.payload);
  }

  return group.fieldGroup.map((currentField) => {
    if (currentField.type !== FormType.Group) return currentField;
    return {
      ...currentField,
      fieldGroup: handleFieldGroupChanges(currentField, action),
    };
  });
};

export const manageFieldGroupActions = (
  groups: GroupFieldType[],
  action: FieldActionType,
): GroupFieldType[] => {
  return groups.map((field) => ({
    ...field,
    fieldGroup: handleFieldGroupChanges(field, action),
  }));
};

export const findField = (
  groups: GroupFieldType[],
  criteria: { index: number; target: string },
): AnyFieldType | null => {
  for (const group of groups) {
    const fieldGroup = group.fieldGroup ?? [];

    if (group.key === criteria.target && criteria.index != null) {
      return fieldGroup[criteria.index] ?? null;
    }

    const nestedGroups = fieldGroup.filter(
      (field): field is GroupFieldType => field.type === FormType.Group,
    );

    const foundField = findField(nestedGroups, criteria);
    if (foundField) return foundField;
  }

  return null;
};

export const findFieldGroup = (
  groups: GroupFieldType[],
  target: string,
  level = 1,
): {
  group: AnyFieldType;
  level: number;
} | null => {
  for (const group of groups) {
    const fieldGroup = group.fieldGroup ?? [];
    if (group.key === target) return { group, level };
    const nestedGroups = fieldGroup.filter(
      (field): field is GroupFieldType => field.type === FormType.Group,
    );
    const foundField = findFieldGroup(nestedGroups, target, level + 1);
    if (foundField) return foundField;
  }
  return null;
};
