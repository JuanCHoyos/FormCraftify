import {
  AlertFieldType,
  AlertPropsType,
  AlignType,
  FormType,
  SeverityType,
  TextFormattingOptionType,
} from '@core/formly/models/form-field-item';

import { BaseFieldBuilder } from './base/base-field.builder';

export class AlertFieldBuilder extends BaseFieldBuilder<AlertPropsType, AlertFieldBuilder> {
  constructor() {
    super({
      severity: SeverityType.Info,
      align: AlignType.Left,
      textFormattingOptions: [],
    });
  }
  newInstance(): AlertFieldBuilder {
    return new AlertFieldBuilder();
  }

  setSeverity(severity: SeverityType) {
    this.props.severity = severity;
    return this;
  }

  setAlign(align: AlignType) {
    this.props.align = align;
    return this;
  }

  setTextFormatting(textFormattingOption: TextFormattingOptionType) {
    this.props.textFormattingOptions = [...this.props.textFormattingOptions, textFormattingOption];
    return this;
  }

  override build(): AlertFieldType {
    return {
      ...super.build(),
      type: FormType.alert,
      props: this.props,
    };
  }
}
