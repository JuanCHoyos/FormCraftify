import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';

import { FormCanvasPanel } from './components/form-canvas-panel/form-canvas-panel';
import { FormInputsPanel } from './components/form-inputs-panel/form-inputs-panel';
import { FormNavbar } from './components/form-navbar/form-navbar';
import { FormSettingsPanel } from './components/form-settings-panel/form-settings-panel';

@Component({
  selector: 'app-form-builder',
  imports: [CommonModule, FormInputsPanel, FormCanvasPanel, FormSettingsPanel, FormNavbar],
  templateUrl: './form-builder.html',
  styleUrl: './form-builder.scss',
})
export class FormBuilder {
  showFormInputsPanel = model<boolean>(false);
}
