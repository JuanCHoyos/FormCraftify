import { ButtonProps } from 'primeng/button';

import { LucideIconType } from './ui.types';

export interface UIButtonProps<B = unknown> extends Omit<ButtonProps, 'icon'> {
  icon?: LucideIconType;
  id: string;
  command?: (args: B) => void;
}
