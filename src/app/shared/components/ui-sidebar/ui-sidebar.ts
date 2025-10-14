import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { AsidePosition, HeadingType } from '../../types/ui.types';
import { UIICon } from '../icon/ui-icon';
import { UITitle } from '../ui-title/ui-title';

@Component({
  selector: 'ui-sidebar',
  imports: [CommonModule, ButtonModule, UIICon, UITitle],
  templateUrl: './ui-sidebar.html',
})
export class UISidebar {
  position = input<AsidePosition>(AsidePosition.Right);
  showSideBar = input<boolean>(false);
  title = input.required<string>();
  subtitle = input<string>();

  isCollapsed = signal<boolean>(false);
  HeadingType = HeadingType;
  AsidePosition = AsidePosition;

  toggleCollapse() {
    this.isCollapsed.set(!this.isCollapsed());
  }
}
