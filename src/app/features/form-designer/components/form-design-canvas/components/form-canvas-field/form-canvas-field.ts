import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AnyFieldType } from '@core/formly/models/form-field-item';
import { FormlyForm } from '@ngx-formly/core';
import { UIICon } from '@shared/components/index';
import { LucideIconType } from '@shared/types/ui.types';
import { ButtonModule, ButtonSeverity } from 'primeng/button';

@Component({
  selector: 'app-form-canvas-field',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, FormlyForm, UIICon],
  templateUrl: './form-canvas-field.html',
})
export class FormCanvasField {
  field = input.required<AnyFieldType>();
  options = signal<
    {
      label: string;
      icon: LucideIconType;
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
