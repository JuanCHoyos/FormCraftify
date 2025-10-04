import { Component, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';

import { HERO_ICONS } from './constants/icons';

@Component({
  selector: 'ui-icon',
  imports: [NgIcon],
  viewProviders: [provideIcons(HERO_ICONS)],
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
  name = input.required<keyof typeof HERO_ICONS>();
  size = input<string | number>(18);
}
