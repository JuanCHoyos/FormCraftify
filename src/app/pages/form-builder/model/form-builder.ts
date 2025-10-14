import { LucideIconType } from '@shared/types/ui.types';

export enum NavigationMode {
  SCROLL = 'SCROLL',
  SECTION = 'SECTION',
}

export interface CanvasMode {
  label: string;
  value: NavigationMode;
  icon: LucideIconType;
}

export interface Section {
  label: string;
  value: number;
}
