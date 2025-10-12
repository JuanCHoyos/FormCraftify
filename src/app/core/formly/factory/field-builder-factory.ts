import { FormType } from '@core/formly/models/form-field-item';

import {
  AlertFieldBuilder,
  CheckboxFieldBuilder,
  DividerFieldBuilder,
  GroupFieldBuilder,
  MultiCheckboxFieldBuilder,
  MultiSelectFieldBuilder,
  NumberFieldBuilder,
  ParagraphFieldBuilder,
  RadioFieldBuilder,
  RatingFieldBuilder,
  SelectFieldBuilder,
  TextAreaFieldBuilder,
  TextFieldBuilder,
  TitleFieldBuilder,
} from '../builders/index';

const builderMap = {
  [FormType.alert]: () => new AlertFieldBuilder(),
  [FormType.email]: () => new AlertFieldBuilder(),
  [FormType.checkbox]: () => new CheckboxFieldBuilder(),
  [FormType.divider]: () => new DividerFieldBuilder(),
  [FormType.group]: () => new GroupFieldBuilder(),
  [FormType.multicheckbox]: () => new MultiCheckboxFieldBuilder(),
  [FormType.multiselect]: () => new MultiSelectFieldBuilder(),
  [FormType.number]: () => new NumberFieldBuilder(),
  [FormType.paragraph]: () => new ParagraphFieldBuilder(),
  [FormType.radio]: () => new RadioFieldBuilder(),
  [FormType.rating]: () => new RatingFieldBuilder(),
  [FormType.select]: () => new SelectFieldBuilder(),
  [FormType.text]: () => new TextFieldBuilder(),
  [FormType.textarea]: () => new TextAreaFieldBuilder(),
  [FormType.title]: () => new TitleFieldBuilder(),
};
export class FieldBuilderFactory {
  create(type: FormType) {
    const builderFn = builderMap[type];
    if (!builderFn) {
      throw new Error(`No builder registered for FormType: ${type}`);
    }
    return builderFn();
  }
}
