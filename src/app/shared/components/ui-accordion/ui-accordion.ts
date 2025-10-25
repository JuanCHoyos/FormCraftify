import { CommonModule } from '@angular/common';
import { Component, computed, contentChild, input, TemplateRef } from '@angular/core';
import { MenuItemType, TreeMenuType } from '@shared/types/ui.types';
import { AccordionModule } from 'primeng/accordion';

import { UIICon } from '../ui-icon/ui-icon';

@Component({
  selector: 'ui-accordion',
  imports: [CommonModule, AccordionModule, UIICon],
  templateUrl: './ui-accordion.html',
})
export class UIAccordion {
  items = input.required<TreeMenuType[]>();
  multiple = input<boolean>(false);
  expandAll = input<boolean>(false);
  content =
    contentChild.required<TemplateRef<{ $implicit: MenuItemType[]; index: number }>>('content');
  defaultValues = computed<TreeMenuType['id'] | TreeMenuType['id'][]>(() => {
    if (this.expandAll()) return this.items().map((item) => item.id);
    return this.items()[0].id;
  });
}
