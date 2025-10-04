import { CommonModule } from '@angular/common';
import { Component, input, model, signal } from '@angular/core';
import { AsidePosition, UIICon, UISearchInput, UISidebar } from '@shared/index';
import { TabsModule } from 'primeng/tabs';

import { FormFieldList } from './components/form-field-list/form-field-list';

@Component({
  selector: 'app-form-inputs-panel',
  imports: [CommonModule, TabsModule, FormFieldList, UIICon, UISearchInput, UISidebar],
  templateUrl: './form-inputs-panel.html',
  styleUrl: './form-inputs-panel.scss',
})
export class FormInputsPanel {
  showSideBar = input<boolean>(false);
  isCollapsed = signal<boolean>(false);
  search = model<string>('');

  AsidePosition = AsidePosition;
}
