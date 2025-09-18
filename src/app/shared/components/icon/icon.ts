import { Component, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';

import { HERO_ICONS } from './constants/icon';

@Component({
  selector: 'app-icon',
  imports: [NgIcon],
  viewProviders: [provideIcons(HERO_ICONS)],
  template: ` <ng-icon name="{{ name() }}" size="{{ size() }}"> </ng-icon>`,
})
export class Icon {
  name = input.required<keyof typeof HERO_ICONS>();
  size = input<string | number>(24);
}
