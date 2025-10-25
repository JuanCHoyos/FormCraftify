import { TreeNode } from 'primeng/api';

import { LucideIconType } from './ui.types';

export interface UITreeNode extends Omit<TreeNode, 'icon' | 'key'> {
  key: string;
  icon: LucideIconType;
}
