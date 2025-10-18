import { CommonModule } from '@angular/common';
import { Component, computed, input, model, signal, viewChild } from '@angular/core';
import { GenericTemplateGuard, ItemSearchFilter } from '@shared/components/index';
import { Popover, PopoverModule } from 'primeng/popover';

import { HeadingType, MenuItemType, TreeMenuType } from '../../types/ui.types';
import { UIICon } from '../icon/ui-icon';
import { UISearchInput } from '../ui-search-input/ui-search-input';
import { UITitle } from '../ui-title/ui-title';

@Component({
  selector: 'ui-menu-popover',
  imports: [
    CommonModule,
    PopoverModule,
    GenericTemplateGuard,
    ItemSearchFilter,
    UIICon,
    UISearchInput,
    UITitle,
  ],
  templateUrl: './ui-menu-popover.html',
})
export class UIMenuPopover {
  menuPopover = viewChild.required<Popover>('menuElement');
  items = input.required<TreeMenuType[] | MenuItemType[]>();
  tree = input<boolean>(false);
  search = input<boolean>(false);
  width = signal<number>(0);
  leafItems = computed<MenuItemType[]>(() => this.items() as MenuItemType[]);
  treeItems = computed<TreeMenuType[]>(() => this.items() as TreeMenuType[]);
  searchText = model<string>('');
  HeadingType = HeadingType;

  handle(item: MenuItemType) {
    if (item.handle) item.handle();
    this.hide();
  }

  toggle(event: PointerEvent | Event) {
    const target = event.currentTarget as HTMLElement | null;
    if (!target) return;
    this.width.set(target.getBoundingClientRect().width);
    this.searchText.set('');
    this.menuPopover().toggle(event);
  }

  hide() {
    this.menuPopover().hide();
  }

  align() {
    setTimeout(() => {
      this.menuPopover().align();
    });
  }
}
