import { LUCIDE_ICONS } from '@shared/components/icon/constants/icons';

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

export type LucideIconType = keyof typeof LUCIDE_ICONS;
