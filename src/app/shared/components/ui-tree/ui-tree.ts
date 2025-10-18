import { CommonModule } from '@angular/common';
import { Component, computed, effect, input, signal } from '@angular/core';
import { UIICon } from '@shared/components/ui-icon/ui-icon';
import { UITitle } from '@shared/components/ui-title/ui-title';
import { HeadingType } from '@shared/types/ui.types';
import { SortablejsModule } from 'nxt-sortablejs';
import { MoveEvent, Options, SortableEvent } from 'sortablejs';

import { UiTreeItem } from './components/ui-tree-item/ui-tree-item';

@Component({
  selector: 'ui-tree',
  imports: [CommonModule, SortablejsModule, UIICon, UITitle, UiTreeItem],
  templateUrl: './ui-tree.html',
})
export class UITree {
  items = input<Item[]>([
    {
      label: 'Contact',
      nodes: [
        {
          label: 'Nombres',
          nodes: [
            {
              label: 'Nombre',
            },
            {
              label: 'Apellido',
            },
          ],
        },
        {
          label: 'Direccion',
          nodes: [
            {
              label: 'Carrera',
            },
          ],
        },
      ],
    },
    {
      label: 'Options',
      nodes: [],
    },
  ]);

  flat = computed<Item[]>(() =>
    this.items().map(({ nodes, ...item }) => {
      console.log(nodes);
      return item;
    }),
  );
  principal = input<boolean>(true);
  HeadingType = HeadingType;
  sortableOptions = signal<Options>({
    group: 'nested',
    animation: 300,
    sort: true,
    fallbackOnBody: true,
    swapThreshold: 0.5,
    ghostClass: 'ghost-element',
    onAdd: (event: SortableEvent) => {
      const index = event.newIndex;
      console.log(index, 'add');
    },
    onMove: (event: MoveEvent) => {
      const index = event;
      console.log(index, 'sort');
    },
  });

  constructor() {
    effect(() => {
      console.log(this.items(), 'changed');
    });
  }
}

interface Item {
  label: string;
  nodes?: Item[];
}
