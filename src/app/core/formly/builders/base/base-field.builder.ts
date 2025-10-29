import {
  FormFieldConfig,
  FormType,
  FormViewWrapperType,
  WrapperType,
} from '@core/formly/models/form-field-item';
import { v4 as uuidv4 } from 'uuid';
export class FormFieldBaseBuilder<Props> {
  protected field: FormFieldConfig<Props>;

  constructor(props: Props) {
    this.field = { id: `${uuidv4()}`, key: `${uuidv4()}`, props, type: FormType.Alert };
  }

  setId(id: string) {
    this.field.id = id;
    return this;
  }

  setKey(key: string) {
    this.field.key = key;
    return this;
  }

  setProps(props: Props) {
    this.field.props = props;
    return this;
  }

  setWrappers(wrappers: (FormViewWrapperType | WrapperType)[]) {
    this.field.wrappers = wrappers;
    return this;
  }

  copy() {
    this.field.props = { ...this.field.props };
    return this;
  }

  copyWith(props: Partial<Props>) {
    const builder = this.copy();
    builder.field.props = { ...builder.field.props, ...props };
    return builder;
  }

  build(): FormFieldConfig<Props> {
    return this.field;
  }
}
