import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormDesignerStore } from '@features/form-designer/services/form-designer-store';
import { UITree } from '@shared/components/index';
import { UIButtonProps } from '@shared/types/ui-button-props';
import { UITreeNodeType } from '@shared/types/ui-tree';
import { TreeNodeDropEvent } from 'primeng/tree';

@Component({
  selector: 'form-tree',
  imports: [CommonModule, UITree],
  templateUrl: './form-tree.html',
})
export class FormTree {
  public readonly formDesignerStore = inject(FormDesignerStore);

  buttons = signal<UIButtonProps<UITreeNodeType>[]>([
    {
      id: '',
      icon: 'lucideCopy',
      severity: 'secondary',
      tooltip: 'Copy element',
      command: (element: UITreeNodeType) => {
        console.log(element, 'a');
        return this.formDesignerStore.handleFieldActionDispatch({
          type: 'CLONE_FIELD',
          payload: {
            key: element.key,
            target: element?.parent?.key as string,
          },
        });
      },
    },
    {
      id: '',
      icon: 'lucideTrash2',
      severity: 'danger',
      tooltip: 'Remove element',
      command: (element) => {
        console.log('remove', element);
      },
    },
  ]);

  drop(event: TreeNodeDropEvent) {
    const { dragNode, dropNode } = event;
    if (!dragNode || !dropNode) return;
    console.log(event);
  }
}
