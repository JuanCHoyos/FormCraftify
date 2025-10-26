import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { UIICon, UITitle } from '@shared/components';
import { HeadingType } from '@shared/types/ui.types';
import { UIButtonProps } from '@shared/types/ui-button-props';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'form-canvas-field-layout',
  imports: [CommonModule, ButtonModule, PanelModule, UIICon, UITitle],
  templateUrl: './form-canvas-field-layout.html',
})
export class FieldLayoutManager {
  type = input.required<'GROUP_FIELD' | 'GROUP' | 'FIELD'>();
  label = input<string>('');
  id = input<string>(uuidv4());
  removeItem = output<void>();
  editItem = output<void>();
  cloneItem = output<void>();
  clickItem = output<void>();
  HeadingType = HeadingType;
  options = signal<UIButtonProps<MouseEvent>[]>([
    {
      id: `edit-${this.id()}`,
      icon: 'lucideSquarePen',
      command: () => {
        this.editItem.emit();
      },
      severity: 'secondary',
    },
    {
      id: `copy-${this.id()}`,
      icon: 'lucideCopy',
      command: () => {
        this.cloneItem.emit();
      },
      severity: 'secondary',
    },
    {
      id: `remove-${this.id()}`,
      icon: 'lucideTrash2',
      command: () => {
        this.removeItem.emit();
      },
      severity: 'danger',
    },
  ]);

  command(event: MouseEvent, option: UIButtonProps<MouseEvent>) {
    event.stopPropagation();
    if (option.command) {
      option.command(event);
    }
  }
}
