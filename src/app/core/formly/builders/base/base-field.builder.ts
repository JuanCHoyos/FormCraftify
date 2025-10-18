import { FieldPropsBaseType } from '@core/formly/models/form-field-item';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { v4 as uuidv4 } from 'uuid';
export type OptionalStrict<T> = {
  [K in keyof T]?: T[K];
};

export abstract class BaseFieldBuilder<
  TProps extends FieldPropsBaseType,
  TBuilder extends BaseFieldBuilder<TProps, TBuilder>,
> {
  protected key: string;
  protected props: TProps;
  abstract newInstance(): TBuilder;

  constructor(defaultProps?: Omit<TProps, keyof FieldPropsBaseType> & Partial<FieldPropsBaseType>) {
    this.key = `${uuidv4()}`;
    this.props = {
      ...this.defaultBaseProps(),
      ...defaultProps,
    } as TProps;
  }

  protected defaultBaseProps(): FieldPropsBaseType {
    return {
      label: '',
      description: '',
      tooltip: '',
      required: false,
      readonly: false,
      disabled: false,
      tabindex: 0,
    };
  }

  protected setProps(props: Partial<TProps>) {
    this.props = { ...this.props, ...props };
    return this;
  }

  protected setKey(key: string) {
    this.key = key;
    return this;
  }

  setLabel(label: string) {
    this.props.label = label;
    return this;
  }

  setDescription(description: string) {
    this.props.description = description;
    return this;
  }

  setTooltip(tooltip: string) {
    this.props.tooltip = tooltip;
    return this;
  }

  setRequired(required: boolean) {
    this.props.required = required;
    return this;
  }

  setReadonly(readonly: boolean) {
    this.props.readonly = readonly;
    return this;
  }

  setDisabled(disabled: boolean) {
    this.props.disabled = disabled;
    return this;
  }

  setTabindex(tabindex: number) {
    this.props.tabindex = tabindex;
    return this;
  }

  copy(): TBuilder {
    const builder = this.newInstance();
    builder.props = { ...this.props };
    return builder;
  }

  copyWith(props: Partial<TProps>): TBuilder {
    const builder = this.copy();
    builder.props = { ...builder.props, ...props };
    return builder;
  }

  build(): FormlyFieldConfig {
    return {
      key: this.key,
      props: this.props,
    };
  }
}
