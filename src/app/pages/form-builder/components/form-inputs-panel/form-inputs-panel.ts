import { CommonModule } from '@angular/common';
import { Component, input, model, signal } from '@angular/core';
import { AsidePosition, UISearchInput, UISidebar } from '@shared/index';
import { TabsModule } from 'primeng/tabs';

import { FormFieldList } from './components/form-field-list/form-field-list';

@Component({
  selector: 'app-form-inputs-panel',
  imports: [CommonModule, TabsModule, FormFieldList, UISearchInput, UISidebar],
  templateUrl: './form-inputs-panel.html',
})
export class FormInputsPanel {
  showSideBar = input<boolean>(false);
  isCollapsed = signal<boolean>(false);
  search = model<string>('');

  AsidePosition = AsidePosition;
}
