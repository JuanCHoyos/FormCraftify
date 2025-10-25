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
    { name: FormType.Alert, component: InputFieldAlert },
    { name: FormType.Checkbox, component: InputFieldCheckbox },
    { name: FormType.Divider, component: InputFieldDivider },
    { name: FormType.Group, component: InputFieldDivider },
    { name: FormType.Number, component: InputFieldNumber },
    { name: FormType.Multicheckbox, component: InputFieldMultiCheckbox },
    { name: FormType.Multiselect, component: InputFieldMultiSelect },
    { name: FormType.Radio, component: InputFieldRadio },
    { name: FormType.Rating, component: InputFieldRating },
    { name: FormType.Select, component: InputFieldSelect },
    { name: FormType.Text, component: InputFieldText },
    { name: FormType.Textarea, component: InputFieldTextArea },
    { name: FormType.Title, component: InputFieldTitle },
    { name: FormType.Paragraph, component: InputFieldParagraph },
  ],
  wrappers: [{ name: WrapperType.Field, component: InputFieldWrapper }],
};
