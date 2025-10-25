import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  FormDesignCanvas,
  FormDesignNavbar,
  FormElementsPanel,
  FormSettingsPanel,
} from './components';

@Component({
  selector: 'app-form-designer',
  imports: [CommonModule, FormElementsPanel, FormDesignCanvas, FormSettingsPanel, FormDesignNavbar],
  templateUrl: './form-designer.html',
  styleUrl: './form-designer.scss',
})
export class FormDesigner {}
