import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormDesignerStore } from '@features/form-designer/services/form-designer-store';
import { UITree } from '@shared/components/index';
import { UIButtonProps } from '@shared/types/ui-button-props';
import { UITreeNode } from '@shared/types/ui-tree';
import { TreeNodeDropEvent } from 'primeng/tree';

@Component({
  selector: 'form-tree',
  imports: [CommonModule, UITree],
  templateUrl: './form-tree.html',
})
export class FormTree {
  public readonly formDesignerStore = inject(FormDesignerStore);

  buttons = signal<UIButtonProps<UITreeNode>[]>([
    {
      id: '',
      icon: 'lucideCopy',
      severity: 'secondary',
      command: (element: UITreeNode) => {
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
      command: (element) => {
        console.log('remove', element);
      },
    },
  ]);

  drop(event: TreeNodeDropEvent) {
    const { dragNode, dropNode } = event;
    if (!dragNode || !dropNode) return;
    console.log(event);
    if (dragNode.parent?.key === dropNode.parent?.key) {
      const oldIndex = dragNode.parent?.children?.findIndex(
        (value) => value.key === event.dragNode?.key,
      );
      console.log(oldIndex);
      return this.formDesignerStore.dispatchMoveWithinGroup({
        fromIndex: oldIndex!,
        target: event.dragNode?.parent?.key as string,
        toIndex: event.index!,
      });
    }
  }
}
