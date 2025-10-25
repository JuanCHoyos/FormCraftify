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
  [FormType.Alert]: () => new AlertFieldBuilder(),
  [FormType.Email]: () => new AlertFieldBuilder(),
  [FormType.Checkbox]: () => new CheckboxFieldBuilder(),
  [FormType.Divider]: () => new DividerFieldBuilder(),
  [FormType.Field]: () => new GroupFieldBuilder(),
  [FormType.Group]: () => new GroupFieldBuilder(),
  [FormType.Multicheckbox]: () => new MultiCheckboxFieldBuilder(),
  [FormType.Multiselect]: () => new MultiSelectFieldBuilder(),
  [FormType.Number]: () => new NumberFieldBuilder(),
  [FormType.Paragraph]: () => new ParagraphFieldBuilder(),
  [FormType.Radio]: () => new RadioFieldBuilder(),
  [FormType.Rating]: () => new RatingFieldBuilder(),
  [FormType.Select]: () => new SelectFieldBuilder(),
  [FormType.Text]: () => new TextFieldBuilder(),
  [FormType.Textarea]: () => new TextAreaFieldBuilder(),
  [FormType.Title]: () => new TitleFieldBuilder(),
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
