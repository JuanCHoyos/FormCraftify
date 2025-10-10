import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyForm } from '@ngx-formly/core';
import { HERO_ICONS } from '@shared/icon/constants/icons';
import { UIICon } from '@shared/index';
import { ButtonModule, ButtonSeverity } from 'primeng/button';

@Component({
  selector: 'app-form-canvas-field',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, FormlyForm, UIICon],
  templateUrl: './form-canvas-field.html',
})
export class FormCanvasField {
  field = input.required<FormlyFieldConfig>();
  options = signal<
    {
      label: string;
      icon: keyof typeof HERO_ICONS;
      handle: () => void;
      severity: ButtonSeverity;
    }[]
  >([
    {
      label: 'edit',
      icon: 'lucideSquarePen',
      handle: () => {
        console.log('');
      },
      severity: 'secondary',
    },
    {
      label: 'copy',
      icon: 'lucideCopy',
      handle: () => {
        console.log('');
      },
      severity: 'secondary',
    },
    {
      label: 'trash',
      icon: 'lucideTrash2',
      handle: () => {
        console.log('');
      },
      severity: 'danger',
    },
  ]);
}
