import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  contentChildren,
  input,
  model,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItemType } from '@shared/types/ui.types';
import { SelectButtonModule } from 'primeng/selectbutton';

import { UIICon } from '../icon/ui-icon';

@Component({
  selector: 'ui-tab',
  template: ` <ng-template #contentTemplate><ng-content></ng-content></ng-template> `,
})
export class UITab {
  value = input.required<MenuItemType['value']>();
  template = viewChild<TemplateRef<unknown>>('contentTemplate');
}

@Component({
  selector: 'ui-tabs',
  imports: [CommonModule, FormsModule, SelectButtonModule, UIICon],
  templateUrl: './ui-tabs.html',
})
export class UITabs {
  tabs = contentChildren(UITab);
  items = input.required<MenuItemType[]>();
  value = model<MenuItemType['value']>(undefined);
  currentActiveTab = computed<UITab | undefined>(() => {
    const activeValue = this.value();
    return this.tabs().find((tab) => tab.value() === activeValue);
  });
}

export const UITabsModule = [UITabs, UITab];
