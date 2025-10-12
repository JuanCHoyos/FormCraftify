import { LucideIcon } from '@shared/icon/constants/icons';

export enum NavigationMode {
  SCROLL = 'SCROLL',
  SECTION = 'SECTION',
}

export interface CanvasMode {
  label: string;
  value: NavigationMode;
  icon: LucideIcon;
}

export interface Section {
  label: string;
  value: number;
}
