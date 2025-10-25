import { CommonModule } from '@angular/common';
import { Component, input, model, OnChanges, output, viewChild } from '@angular/core';
import { GenericTemplateGuard } from '@shared/directives';
import { UIButtonProps } from '@shared/types/ui-button-props';
import { UITreeNode } from '@shared/types/ui-tree';
import { TreeDragDropService, TreeNode } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { Tree, TreeModule, TreeNodeDropEvent } from 'primeng/tree';

import { UIICon } from '../ui-icon/ui-icon';
@Component({
  selector: 'ui-tree',
  imports: [
    CommonModule,
    ButtonModule,
    ContextMenuModule,
    TreeModule,
    GenericTemplateGuard,
    UIICon,
  ],
  providers: [TreeDragDropService],
  templateUrl: './ui-tree.html',
  styleUrl: './ui-tree.scss',
})
export class UITree implements OnChanges {
  items = input.required<UITreeNode[]>();
  buttons = input<UIButtonProps<UITreeNode>[]>([]);
  selectedFile = model<TreeNode>();
  dropEvent = output<TreeNodeDropEvent>();
  primeTree = viewChild<Tree>('primeTree');

  ngOnChanges(): void {
    for (const item of this.items()) {
      this.expandRecursive(item, true);
    }
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      for (const childNode of node.children) {
        this.expandRecursive(childNode, isExpand);
      }
    }
  }

  handleUIButtonInteraction(
    event: MouseEvent,
    button: UIButtonProps<UITreeNode>,
    item: UITreeNode,
  ) {
    event.stopPropagation();
    if (button.command) button.command(item);
  }

  drop(event: TreeNodeDropEvent) {
    event.accept = () => {
      return false;
    };
    this.dropEvent.emit(event);
  }
}
