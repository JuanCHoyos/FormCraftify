import { LUCIDE_ICONS } from '@shared/components/ui-icon/constants/icons';

export type LucideIconType = keyof typeof LUCIDE_ICONS;

export interface MenuItemType<T = unknown> {
  id: string;
  label: string;
  description?: string;
  icon: LucideIconType;
  value?: T;
  handle?: () => void;
}

export interface TreeMenuType<T = unknown> {
  id: string;
  label: string;
  items: MenuItemType<T>[];
}

export interface TreeItem<T = unknown> {
  id: string;
  label: string;
  description?: string;
  icon: LucideIconType;
  value: T;
}

export interface TreeNode<T = unknown> {
  nodes: TreeType<T>[];
}

export interface TreeType<T = unknown> {
  id: string;
  label: string;
  description?: string;
  icon: LucideIconType;
  value: T;
  nodes?: TreeType<T>[];
}

export enum AsidePosition {
  Left = 'left',
  Right = 'right',
}

export enum UISearchVariant {
  Filled = 'filled',
  Outlined = 'outlined',
}

export enum HeadingType {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
}
