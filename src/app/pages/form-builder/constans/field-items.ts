import { FormType } from '@core/formly/models/form-field-item';
import { TreeMenuType } from '@shared/types/ui.types';

export const FORM_FIELD_CATEGORIES: TreeMenuType<FormType>[] = [
  {
    id: 'layout',
    label: 'Layout',
    items: [
      {
        id: 'layout-container',
        label: 'Container',
        icon: 'lucideSquare',
        value: FormType.group,
        description: 'Groups fields together.',
      },
      {
        id: 'layout-divider',
        label: 'Divider',
        icon: 'lucideMinus',
        value: FormType.divider,
        description: 'Adds a horizontal separator.',
      },
      {
        id: 'layout-label',
        label: 'Title',
        icon: 'lucideHeading1',
        value: FormType.title,
        description: 'Displays a section heading.',
      },
      {
        id: 'layout-paragraph',
        label: 'Paragraph',
        icon: 'lucideFileText',
        value: FormType.paragraph,
        description: 'Adds descriptive text.',
      },
      {
        id: 'layout-message',
        label: 'Message',
        icon: 'lucideInfo',
        value: FormType.alert,
        description: 'Shows an informational alert.',
      },
    ],
  },
  {
    id: 'fields',
    label: 'Fields',
    items: [
      {
        id: 'fields-text',
        label: 'Text',
        icon: 'lucideType',
        value: FormType.text,
        description: 'Single-line text input.',
      },
      {
        id: 'fields-textarea',
        label: 'Textarea',
        icon: 'lucideAlignLeft',
        value: FormType.textarea,
        description: 'Multi-line text input.',
      },
      {
        id: 'fields-number',
        label: 'Number',
        icon: 'lucideHash',
        value: FormType.number,
        description: 'Numeric input data.',
      },
      {
        id: 'fields-email',
        label: 'Email',
        icon: 'lucideMail',
        value: FormType.email,
        description: 'Email address input.',
      },
      {
        id: 'fields-select',
        label: 'Select',
        icon: 'lucideChevronsUpDown',
        value: FormType.select,
        description: 'Dropdown selection.',
      },
      {
        id: 'fields-multiselect',
        label: 'Multiselect',
        icon: 'lucideChevronsUpDown',
        value: FormType.multiselect,
        description: 'Multiple options selection.',
      },
      {
        id: 'fields-checkbox',
        label: 'Checkbox',
        icon: 'lucideSquareCheck',
        value: FormType.checkbox,
        description: 'Single checkbox option.',
      },
      {
        id: 'fields-checkbox-group',
        label: 'Checkbox group',
        icon: 'lucideSquareCheck',
        value: FormType.multicheckbox,
        description: 'Multiple checkboxes.',
      },
      {
        id: 'fields-radio',
        label: 'Radio',
        icon: 'lucideCircleDot',
        value: FormType.radio,
        description: 'Single-choice radio buttons.',
      },
      {
        id: 'fields-rating',
        label: 'Rating',
        icon: 'lucideStar',
        value: FormType.rating,
        description: 'Star rating input.',
      },
    ],
  },
  {
    id: 'advanced-fields',
    label: 'Advanced Fields',
    items: [],
  },
] as const;
