import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { UIICon } from '@shared/components';
import { UIButtonProps } from '@shared/types/ui-button-props';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'form-canvas-field-layout',
  imports: [CommonModule, ButtonModule, UIICon],
  templateUrl: './form-canvas-field-layout.html',
})
export class FieldLayoutManager {
  label = input<string>('');
  id = input<number>(Date.now());
  remove = output<void>();
  edit = output<void>();
  clone = output<void>();
  hover = signal<boolean>(false);
  options = signal<UIButtonProps<MouseEvent>[]>([
    {
      id: 'edit-field',
      label: 'edit',
      icon: 'lucideSquarePen',
      command: () => {
        this.edit.emit();
      },
      severity: 'secondary',
    },
    {
      id: 'copy-field',
      label: 'copy',
      icon: 'lucideCopy',
      command: () => {
        this.clone.emit();
      },
      severity: 'secondary',
    },
    {
      id: 'trash-field',
      label: 'trash',
      icon: 'lucideTrash2',
      command: () => {
        this.remove.emit();
      },
      severity: 'danger',
    },
  ]);

  command(event: MouseEvent, option: UIButtonProps<MouseEvent>) {
    event.preventDefault();
    event.stopPropagation();
    if (option.command) {
      option.command(event);
    }
  }
}
