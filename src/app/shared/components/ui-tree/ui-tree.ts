import { CommonModule } from '@angular/common';
import { Component, input, model, output, viewChild } from '@angular/core';
import { GenericTemplateGuard } from '@shared/directives';
import { UIButtonProps } from '@shared/types/ui-button-props';
import { UITreeNodeType, UITreeType } from '@shared/types/ui-tree';
import { TreeDragDropService, TreeNode } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { Tree, TreeModule, TreeNodeDropEvent } from 'primeng/tree';

import { UIICon } from '../ui-icon/ui-icon';
@Component({
  selector: 'ui-tree',
  imports: [CommonModule, ButtonModule, TreeModule, TooltipModule, GenericTemplateGuard, UIICon],
  providers: [TreeDragDropService],
  templateUrl: './ui-tree.html',
  styleUrl: './ui-tree.scss',
})
export class UITree {
  tree = input.required<UITreeType>();
  buttons = input<UIButtonProps<UITreeNodeType>[]>([]);
  selectedFile = model<TreeNode>();
  dropEvent = output<TreeNodeDropEvent>();
  primeTree = viewChild<Tree>('primeTree');

  handleUIButtonInteraction(
    event: MouseEvent,
    button: UIButtonProps<UITreeNodeType>,
    item: UITreeNodeType,
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
