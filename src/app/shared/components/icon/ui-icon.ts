import { Component, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';

import { LucideIconType } from '../../types/ui.types';
import { LUCIDE_ICONS } from './constants/icons';

@Component({
  selector: 'ui-icon',
  imports: [NgIcon],
  viewProviders: [provideIcons(LUCIDE_ICONS)],
  template: ` <ng-icon name="{{ name() }}"> </ng-icon>`,
  styles: [
    `
      :host {
        display: inline-flex;
      }
    `,
  ],
})
export class UIICon {
  name = input.required<LucideIconType>();
  size = input<string | number>(18);
}
