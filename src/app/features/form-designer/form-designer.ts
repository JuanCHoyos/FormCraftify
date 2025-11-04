import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import {
  FormDesignerCanvas,
  FormDesignerNavbar,
  FormElementsPanel,
  FormSettingsPanel,
} from './components';
import { FormDesignerPreview } from './components/form-designer-preview/form-designer-preview';
import { FormDesignerNavigation } from './services/form-designer-navigation';

@Component({
  selector: 'app-form-designer',
  imports: [
    CommonModule,
    FormElementsPanel,
    FormDesignerCanvas,
    FormDesignerPreview,
    FormSettingsPanel,
    FormDesignerNavbar,
  ],
  templateUrl: './form-designer.html',
  styleUrl: './form-designer.scss',
})
export class FormDesigner {
  public readonly formDesignerNavigation = inject(FormDesignerNavigation);
}
