import { FormlyFieldConfig } from '@ngx-formly/core';

export enum FormType {
  Alert = 'alert',
  Checkbox = 'checkbox',
  Divider = 'divider',
  Email = 'email',
  Field = 'Field',
  Group = 'group',
  Multicheckbox = 'multicheckbox',
  Multiselect = 'multiselect',
  Number = 'number',
  Paragraph = 'paragraph',
  Radio = 'radio',
  Rating = 'rating',
  Select = 'select',
  Text = 'text',
  Textarea = 'textarea',
  Title = 'title',
}

export enum TextFormattingOptionType {
  Bold = 'bold',
  Underline = 'underline',
  Italic = 'italic',
  Strikethrough = 'strikethrough',
}

export enum AlignType {
  Left = 'left',
  Center = 'center',
  Right = 'right',
  Justify = 'justify',
}

export enum HeadingType {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
}

export enum RatingType {
  Stars = 'stars',
  Numbers = 'numbers',
}

export enum SeverityType {
  Info = 'info',
  Warn = 'warn',
  Error = 'error',
  Success = 'success',
}

export enum FormViewWrapperType {
  Accordion = 'accordion',
  Card = 'card',
  Stepper = 'stepper',
  Tabs = 'tabs',
}

export enum WrapperType {
  Alert = 'alert',
  Divider = 'divider',
  Field = 'field',
  FormControl = 'formControl',
  Paragraph = 'paragraph',
  Title = 'title',
}

export interface OptionType {
  id: string;
  label: string;
  value: string | string[] | number | boolean | undefined;
}

export interface FieldPropsBaseType {
  label?: string;
  description?: string;
  tooltip?: string;
  required: boolean;
  readonly: boolean;
  disabled: boolean;
  tabindex: number;
}

export interface FormFieldConfig<Props>
  extends Omit<FormlyFieldConfig, 'props' | 'fieldGroup' | 'type'> {
  id: string;
  key: string;
  type: FormType;
  props: Props;
  wrappers?: (FormViewWrapperType | WrapperType)[];
}

export interface AlertPropsType {
  label: string;
  severity: SeverityType;
  align: AlignType;
  textFormattingOptions: TextFormattingOptionType[];
}

export interface AlertFieldType extends FormFieldConfig<AlertPropsType> {
  type: FormType.Alert;
}

export interface CheckboxFieldType extends FormFieldConfig<FieldPropsBaseType> {
  type: FormType.Checkbox;
  wrappers: [WrapperType.Field];
}

export interface DividerPropsType {
  color: string;
}

export interface DividerFieldType extends FormFieldConfig<DividerPropsType> {
  type: FormType.Divider;
}

export interface FormPropsType {
  label: string;
}

export interface FormFieldType extends FormFieldConfig<FormPropsType> {
  type: FormType.Group;
  fieldGroup: GroupFieldType[];
  wrappers: [FormViewWrapperType];
}

export interface GroupPropsType {
  cols: number;
  label: FieldPropsBaseType['label'];
}

export interface GroupFieldType extends FormFieldConfig<GroupPropsType> {
  type: FormType.Group;
  fieldGroup: AnyFieldType[];
  props: GroupPropsType;
}

export interface MulticheckboxPropsType extends FieldPropsBaseType {
  options: OptionType[];
}

export interface MultiCheckboxFieldType extends FormFieldConfig<MulticheckboxPropsType> {
  type: FormType.Multicheckbox;
  wrappers: [WrapperType.Field];
  props: MulticheckboxPropsType;
}

export interface MultiSelectPropsType extends FieldPropsBaseType {
  placeholder: string;
  options: OptionType[];
}

export interface MultiSelectFieldType extends FormFieldConfig<MultiSelectPropsType> {
  type: FormType.Multiselect;
  wrappers: [WrapperType.Field];
}

export interface NumberPropsType extends FieldPropsBaseType {
  placeholder: string;
  min: number;
  max: number;
}

export interface NumberFieldType extends FormFieldConfig<NumberPropsType> {
  type: FormType.Number;
  wrappers: [WrapperType.Field];
}

export interface ParagraphPropsType {
  align: AlignType;
  label: string;
  textFormattingOptions: TextFormattingOptionType[];
}

export interface ParagraphFieldType extends FormFieldConfig<ParagraphPropsType> {
  type: FormType.Paragraph;
}

export interface RadioPropsType extends FieldPropsBaseType {
  options: OptionType[];
}

export interface RadioFieldType extends FormFieldConfig<RadioPropsType> {
  type: FormType.Radio;
  wrappers: [WrapperType.Field];
}

export interface RatingPropsType extends FieldPropsBaseType {
  type: RatingType;
  stars: number;
}

export interface RatingFieldType extends FormFieldConfig<RatingPropsType> {
  type: FormType.Rating;
  wrappers: [WrapperType.Field];
}

export interface SelectPropsType extends FieldPropsBaseType {
  placeholder: string;
  options: OptionType[];
}

export interface SelectFieldType extends FormFieldConfig<SelectPropsType> {
  type: FormType.Select;
  wrappers: [WrapperType.Field];
}

export interface TextAreaPropsType extends FieldPropsBaseType {
  placeholder: string;
  minLength: number;
  maxLength: number;
}

export interface TextAreaFieldType extends FormFieldConfig<TextAreaPropsType> {
  type: FormType.Textarea;
  wrappers: [WrapperType.Field];
}

export interface TextPropsType extends FieldPropsBaseType {
  placeholder: string;
  minLength: number;
  maxLength: number;
}

export interface TextFieldType extends FormFieldConfig<TextPropsType> {
  type: FormType.Text;
  wrappers: [WrapperType.Field];
}

export interface TitlePropsType {
  label: string;
  headingType: HeadingType;
  align: AlignType;
  textFormattingOptions: TextFormattingOptionType[];
}

export interface TitleFieldType extends FormFieldConfig<TitlePropsType> {
  type: FormType.Title;
}

export type AnyFieldType =
  | AlertFieldType
  | CheckboxFieldType
  | DividerFieldType
  | GroupFieldType
  | MultiCheckboxFieldType
  | MultiSelectFieldType
  | NumberFieldType
  | ParagraphFieldType
  | RadioFieldType
  | RatingFieldType
  | SelectFieldType
  | TextAreaFieldType
  | TextFieldType
  | TitleFieldType;
