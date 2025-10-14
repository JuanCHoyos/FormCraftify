import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';

export enum FormType {
  alert = 'alert',
  checkbox = 'checkbox',
  divider = 'divider',
  email = 'email',
  group = 'group',
  multicheckbox = 'multicheckbox',
  multiselect = 'multiselect',
  number = 'number',
  paragraph = 'paragraph',
  radio = 'radio',
  rating = 'rating',
  select = 'select',
  text = 'text',
  textarea = 'textarea',
  title = 'title',
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
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  tabindex?: number;
}

export interface FieldBaseType<FieldProps extends FormlyFieldProps = FormlyFieldProps>
  extends FormlyFieldConfig<FieldProps> {
  key: string;
  props: FieldProps;
  fieldGroups?: AnyFieldType[];
}

export interface AlertPropsType extends FieldPropsBaseType {
  severity: SeverityType;
  align: AlignType;
  textFormattingOptions: TextFormattingOptionType[];
}

export interface AlertFieldType extends FieldBaseType<AlertPropsType> {
  type: FormType.alert;
}

export interface CheckboxFieldType extends FieldBaseType<FieldPropsBaseType> {
  type: FormType.checkbox;
  wrappers: [WrapperType.Field];
}

export interface DividerFieldType extends FieldBaseType<object> {
  type: FormType.divider;
}

export interface FormPropsType {
  label: FieldPropsBaseType['label'];
}

export interface FormFieldType extends FieldBaseType<FormPropsType> {
  fieldGroup: GroupFieldType[];
  wrappers: [FormViewWrapperType];
}

export interface GroupPropsType {
  cols: number;
  label: FieldPropsBaseType['label'];
}

export interface GroupFieldType extends FieldBaseType<GroupPropsType> {
  type: FormType.group;
  fieldGroup: AnyFieldType[];
}

export interface MulticheckboxPropsType extends FieldPropsBaseType {
  options: OptionType[];
}

export interface MultiCheckboxFieldType extends FieldBaseType<MulticheckboxPropsType> {
  type: FormType.multicheckbox;
  wrappers: [WrapperType.Field];
}

export interface MultiSelectPropsType extends FieldPropsBaseType {
  placeholder: string;
  options: OptionType[];
}

export interface MultiSelectFieldType extends FieldBaseType<MultiSelectPropsType> {
  type: FormType.multiselect;
  wrappers: [WrapperType.Field];
}

export interface NumberPropsType extends FieldPropsBaseType {
  placeholder: string;
  min: FormlyFieldProps['min'];
  max: FormlyFieldProps['max'];
}

export interface NumberFieldType extends FieldBaseType<NumberPropsType> {
  type: FormType.number;
  wrappers: [WrapperType.Field];
}

export interface ParagraphPropsType extends FieldPropsBaseType {
  align: AlignType;
  textFormattingOptions: TextFormattingOptionType[];
}

export interface ParagraphFieldType extends FieldBaseType<ParagraphPropsType> {
  type: FormType.paragraph;
}

export interface RadioPropsType extends FieldPropsBaseType {
  options: OptionType[];
}

export interface RadioFieldType extends FieldBaseType<RadioPropsType> {
  type: FormType.radio;
  wrappers: [WrapperType.Field];
}

export interface RatingPropsType extends FieldPropsBaseType {
  type: RatingType;
  stars: number;
}

export interface RatingFieldType extends FieldBaseType<RatingPropsType> {
  type: FormType.rating;
  wrappers: [WrapperType.Field];
}

export interface SelectPropsType extends FieldPropsBaseType {
  placeholder: string;
  options: OptionType[];
}

export interface SelectFieldType extends FieldBaseType<SelectPropsType> {
  type: FormType.select;
  wrappers: [WrapperType.Field];
}

export interface TextAreaPropsType extends FieldPropsBaseType {
  placeholder: string;
  minLength: FormlyFieldProps['minLength'];
  maxLength: FormlyFieldProps['maxLength'];
}

export interface TextAreaFieldType extends FieldBaseType<TextAreaPropsType> {
  type: FormType.textarea;
  wrappers: [WrapperType.Field];
}

export interface TextPropsType extends FieldPropsBaseType {
  placeholder: string;
  minLength: FormlyFieldProps['minLength'];
  maxLength: FormlyFieldProps['maxLength'];
}

export interface TextFieldType extends FieldBaseType<TextPropsType> {
  type: FormType.text;
  wrappers: [WrapperType.Field];
}

export interface TitlePropsType extends FieldPropsBaseType {
  headingType: HeadingType;
  align: AlignType;
  textFormattingOptions: TextFormattingOptionType[];
}

export interface TitleFieldType extends FieldBaseType<TitlePropsType> {
  type: FormType.title;
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
