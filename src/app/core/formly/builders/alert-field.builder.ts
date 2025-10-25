import {
  AlertFieldType,
  AlertPropsType,
  AlignType,
  FormType,
  SeverityType,
  TextFormattingOptionType,
} from '@core/formly/models/form-field-item';

import { FormFieldBaseBuilder } from './base/base-field.builder';

export class AlertFieldBuilder extends FormFieldBaseBuilder<AlertPropsType> {
  constructor() {
    super({
      align: AlignType.Center,
      label: '',
      severity: SeverityType.Info,
      textFormattingOptions: [
        TextFormattingOptionType.Bold,
        TextFormattingOptionType.Italic,
        TextFormattingOptionType.Underline,
      ],
    });
  }
  newInstance(): AlertFieldBuilder {
    return new AlertFieldBuilder();
  }

  setSeverity(severity: SeverityType) {
    this.field.props.severity = severity;
    return this;
  }

  setAlign(align: AlignType) {
    this.field.props.align = align;
    return this;
  }

  setTextFormatting(textFormattingOption: TextFormattingOptionType) {
    this.field.props.textFormattingOptions = [
      ...this.field.props.textFormattingOptions,
      textFormattingOption,
    ];
    return this;
  }

  override build(): AlertFieldType {
    return {
      ...super.build(),
      type: FormType.Alert,
    };
  }
}
