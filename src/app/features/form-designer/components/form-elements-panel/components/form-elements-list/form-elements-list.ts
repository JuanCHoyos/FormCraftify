import { CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { FormType } from '@core/formly/models/form-field-item';
import { FORM_ELEMENT_CATEGORIES } from '@features/form-designer/constants/form-elements';
import { FormDesignerStore } from '@features/form-designer/services/form-designer-store';
import { GenericTemplateGuard, ItemSearchFilter, UIAccordion } from '@shared/components/index';
import { TreeMenuType } from '@shared/types/ui.types';
import { SortablejsModule } from 'nxt-sortablejs';
import { Options } from 'sortablejs';

import { FormElementItem } from '../form-element-item/form-element-item';

@Component({
  selector: 'app-form-elements-list',
  imports: [
    CommonModule,
    FormElementItem,
    CdkDropList,
    GenericTemplateGuard,
    ItemSearchFilter,
    SortablejsModule,
    UIAccordion,
  ],
  templateUrl: './form-elements-list.html',
})
export class FormElementsList {
  public readonly formDesignerStore = inject(FormDesignerStore);
  searchText = input<string>('');
  formElementCategories = signal<TreeMenuType<FormType>[]>(FORM_ELEMENT_CATEGORIES);
  sortableOptions = signal<Options>({
    group: {
      name: 'shared',
      pull: 'clone',
      put: false,
    },
    animation: 300,
    sort: false,
  });
}
