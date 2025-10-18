export enum NavigationMode {
  SCROLL = 'scroll',
  SECTION = 'section',
}

export interface CanvasMode {
  label: string;
  value: NavigationMode;
  icon: string;
}

export interface Section {
  label: string;
  value: number;
}
