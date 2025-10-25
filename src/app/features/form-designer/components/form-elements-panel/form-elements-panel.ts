import { CommonModule } from '@angular/common';
import { Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationMode } from '@features/form-designer/model/form-designer';
import { UISearchInput, UISidebar, UITabsModule } from '@shared/components/index';
import { AsidePosition, MenuItemType } from '@shared/types/ui.types';

import { FormDesignerStore } from '../../services/form-designer-store';
import { FormElementsList } from './components';
import { FormTree } from './components/form-tree/form-tree';

@Component({
  selector: 'app-form-elements-panel',
  imports: [
    CommonModule,
    FormsModule,
    FormElementsList,
    FormTree,
    UISidebar,
    UISearchInput,
    UITabsModule,
  ],
  templateUrl: './form-elements-panel.html',
})
export class FormElementsPanel {
  public readonly formDesignerStore = inject(FormDesignerStore);

  searchText = model<string>('');

  items = signal<MenuItemType<number>[]>([
    { id: 'tab-elements', label: 'Elements', value: 0, icon: 'lucideComponent' },
    { id: 'tab-tree', label: 'Tree', value: 1, icon: 'lucideListTree' },
  ]);

  NavigationMode = NavigationMode;
  AsidePosition = AsidePosition;
}
