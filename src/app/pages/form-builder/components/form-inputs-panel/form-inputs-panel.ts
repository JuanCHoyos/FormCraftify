import { CommonModule } from '@angular/common';
import { Component, input, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationMode } from '@pages/form-builder/model/form-builder';
import { UISearchInput, UISidebar, UITabsModule, UITree } from '@shared/components/index';
import { AsidePosition, MenuItemType } from '@shared/types/ui.types';

import { FormFieldList } from './components/form-field-list/form-field-list';

@Component({
  selector: 'app-form-inputs-panel',
  imports: [
    CommonModule,
    FormsModule,
    FormFieldList,
    UISidebar,
    UISearchInput,
    UITabsModule,
    UITree,
  ],
  templateUrl: './form-inputs-panel.html',
})
export class FormInputsPanel {
  showSideBar = input<boolean>(false);
  searchText = model<string>('');

  items = signal<MenuItemType<number>[]>([
    { id: 'tab-component', label: 'Components', value: 0, icon: 'lucideComponent' },
    { id: 'tab-tree', label: 'Tree', value: 1, icon: 'lucideListTree' },
  ]);
  value = model(NavigationMode.SCROLL);
  NavigationMode = NavigationMode;
  AsidePosition = AsidePosition;
}
