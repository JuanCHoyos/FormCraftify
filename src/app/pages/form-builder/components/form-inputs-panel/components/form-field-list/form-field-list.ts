import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { FormType } from '@core/formly/models/form-field-item';
import { FORM_FIELD_CATEGORIES } from '@pages/form-builder/constans/field-items';
import { GenericTemplateGuard, ItemSearchFilter, UIAccordion } from '@shared/components/index';
import { TreeMenuType } from '@shared/types/ui.types';
import { SortablejsModule } from 'nxt-sortablejs';
import { Options } from 'sortablejs';

import { FormFieldItem } from '../form-field-item/form-field-item';

@Component({
  selector: 'app-form-field-list',
  imports: [
    CommonModule,
    FormFieldItem,
    SortablejsModule,
    ItemSearchFilter,
    UIAccordion,
    GenericTemplateGuard,
  ],
  templateUrl: './form-field-list.html',
})
export class FormFieldList {
  searchText = input<string>('');
  formFieldCategories = signal<TreeMenuType<FormType>[]>(FORM_FIELD_CATEGORIES);
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
