import { FormType, WrapperType } from '@core/formly/models/form-field-item';
import { ConfigOption } from '@ngx-formly/core';

import {
  AlertComponent,
  DividerComponent,
  InputFieldTextAreaComponent,
  InputFieldTextComponent,
  ParagraphWrapperComponent,
  TitleWrapperComponent,
} from './types/index';
import { FieldWrapperComponent } from './wrappers/index';

export const formlyConfig: ConfigOption = {
  types: [
    { name: FormType.alert, component: AlertComponent },
    { name: FormType.divider, component: DividerComponent },
    { name: FormType.text, component: InputFieldTextComponent },
    { name: FormType.textarea, component: InputFieldTextAreaComponent },
    { name: FormType.title, component: TitleWrapperComponent },
    { name: FormType.paragraph, component: ParagraphWrapperComponent },
  ],
  wrappers: [{ name: WrapperType.Field, component: FieldWrapperComponent }],
};
