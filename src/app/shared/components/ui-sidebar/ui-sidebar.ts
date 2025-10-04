import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { UIICon } from '@shared/icon/ui-icon';
import { Heading, UITitle } from '@shared/ui-title/ui-title';
import { ButtonModule } from 'primeng/button';

export enum AsidePosition {
  left = 'left',
  right = 'right',
}

@Component({
  selector: 'ui-sidebar',
  imports: [CommonModule, ButtonModule, UIICon, UITitle],
  templateUrl: './ui-sidebar.html',
})
export class UISidebar {
  position = input<AsidePosition>(AsidePosition.right);
  showSideBar = input<boolean>(false);
  title = input.required<string>();
  subtitle = input<string>();

  isCollapsed = signal<boolean>(false);
  Heading = Heading;
  AsidePosition = AsidePosition;

  toggleCollapse() {
    this.isCollapsed.set(!this.isCollapsed());
  }
}
