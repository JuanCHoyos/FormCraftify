import { FieldType, FormlyFieldProps } from '@ngx-formly/core';

import { AnyFieldType } from './form-field-item';

declare module '@ngx-formly/core' {
  interface FormlyFieldConfig<FieldProps extends FormlyFieldProps = FormlyFieldProps> {
    key: string;
    props: FieldProps;
    fieldGroups?: AnyFieldType[];
  }
}

export abstract class FieldTypea<
  F extends FormlyFieldConfig = FormlyFieldConfig,
> extends FieldType {
  field: F & { key: string; id: string };
  get key(): string;
  props: F['props'];
}
