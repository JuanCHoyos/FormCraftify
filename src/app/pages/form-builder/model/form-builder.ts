import { HERO_ICONS } from '@shared/icon/constants/icons';

export enum NavigationMode {
  SCROLL = 'SCROLL',
  SECTION = 'SECTION',
}

export interface CanvasMode {
  label: string;
  value: NavigationMode;
  icon: keyof typeof HERO_ICONS;
}

export interface Section {
  label: string;
  value: number;
}
