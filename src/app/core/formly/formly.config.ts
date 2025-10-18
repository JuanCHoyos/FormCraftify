import { FormType, WrapperType } from '@core/formly/models/form-field-item';
import { ConfigOption } from '@ngx-formly/core';

import {
  InputFieldAlert,
  InputFieldCheckbox,
  InputFieldDivider,
  InputFieldMultiCheckbox,
  InputFieldMultiSelect,
  InputFieldNumber,
  InputFieldParagraph,
  InputFieldRadio,
  InputFieldRating,
  InputFieldSelect,
  InputFieldText,
  InputFieldTextArea,
  InputFieldTitle,
} from './types/index';
import { InputFieldWrapper } from './wrappers/index';

export const formlyConfig: ConfigOption = {
  types: [
    { name: FormType.alert, component: InputFieldAlert },
    { name: FormType.checkbox, component: InputFieldCheckbox },
    { name: FormType.divider, component: InputFieldDivider },
    { name: FormType.number, component: InputFieldNumber },
    { name: FormType.multicheckbox, component: InputFieldMultiCheckbox },
    { name: FormType.multiselect, component: InputFieldMultiSelect },
    { name: FormType.radio, component: InputFieldRadio },
    { name: FormType.rating, component: InputFieldRating },
    { name: FormType.select, component: InputFieldSelect },
    { name: FormType.text, component: InputFieldText },
    { name: FormType.textarea, component: InputFieldTextArea },
    { name: FormType.title, component: InputFieldTitle },
    { name: FormType.paragraph, component: InputFieldParagraph },
  ],
  wrappers: [{ name: WrapperType.Field, component: InputFieldWrapper }],
};
