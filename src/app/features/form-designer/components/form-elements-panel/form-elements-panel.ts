import { CommonModule } from '@angular/common';
import { Component, input, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationMode } from '@features/form-designer/model/form-designer';
import { UISearchInput, UISidebar, UITabsModule, UITree } from '@shared/components/index';
import { AsidePosition, MenuItemType } from '@shared/types/ui.types';

import { FormElementsList } from './components';

@Component({
  selector: 'app-form-elements-panel',
  imports: [
    CommonModule,
    FormsModule,
    FormElementsList,
    UISidebar,
    UISearchInput,
    UITabsModule,
    UITree,
  ],
  templateUrl: './form-elements-panel.html',
})
export class FormElementsPanel {
  showSideBar = input<boolean>(false);
  searchText = model<string>('');

  items = signal<MenuItemType<number>[]>([
    { id: 'tab-elements', label: 'Elements', value: 0, icon: 'lucideComponent' },
    { id: 'tab-tree', label: 'Tree', value: 1, icon: 'lucideListTree' },
  ]);
  value = model(NavigationMode.SCROLL);
  NavigationMode = NavigationMode;
  AsidePosition = AsidePosition;
}
