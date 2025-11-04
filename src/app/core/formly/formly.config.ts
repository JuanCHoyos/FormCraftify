import { FormType, FormViewWrapperType, WrapperType } from '@core/formly/models/form-field-item';
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
import { InputFieldGroup } from './types/input-field-group/input-field-group';
import { AccordionWrapper } from './wrappers/accordion-wrapper/accordion-wrapper';
import { CardWrapper } from './wrappers/card-wrapper/card-wrapper';
import { InputFieldWrapper } from './wrappers/index';
import { StepperWrapper } from './wrappers/stepper-wrapper/stepper-wrapper';
import { TabsWrapper } from './wrappers/tabs-wrapper/tabs-wrapper';

export const formlyConfig: ConfigOption = {
  types: [
    { name: FormType.Alert, component: InputFieldAlert },
    { name: FormType.Checkbox, component: InputFieldCheckbox },
    { name: FormType.Divider, component: InputFieldDivider },
    { name: FormType.Group, component: InputFieldGroup },
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
  wrappers: [
    { name: WrapperType.Field, component: InputFieldWrapper },
    { name: FormViewWrapperType.Accordion, component: AccordionWrapper },
    { name: FormViewWrapperType.Card, component: CardWrapper },
    { name: FormViewWrapperType.Stepper, component: StepperWrapper },
    { name: FormViewWrapperType.Tabs, component: TabsWrapper },
  ],
};
