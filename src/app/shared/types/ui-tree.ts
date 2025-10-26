import { TreeNode } from 'primeng/api';

import { LucideIconType } from './ui.types';

export interface UITreeType {
  label: string;
  nodes: UITreeNodeType[];
}

export interface UITreeNodeType extends Omit<TreeNode, 'icon' | 'key'> {
  key: string;
  icon: LucideIconType;
}
