import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { UIICon } from '@shared/components/ui-icon/ui-icon';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ui-tree-item',
  imports: [CommonModule, ButtonModule, UIICon],
  templateUrl: './ui-tree-item.html',
  styles: `
    :host ::ng-deep .p-button {
      padding: 0.2rem;
    }
  `,
})
export class UiTreeItem {
  item = input.required<Item>();
  hasNodes = computed<boolean>(() => 'nodes' in this.item());
  expanded = signal<boolean>(false);
}
interface Item {
  label: string;
  nodes?: Item[];
}
