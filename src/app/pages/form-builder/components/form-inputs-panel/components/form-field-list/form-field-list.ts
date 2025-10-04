import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UIICon } from '@shared/index';
import { SortablejsModule } from 'nxt-sortablejs';
import { AccordionModule } from 'primeng/accordion';
import { Options } from 'sortablejs';

import { FormFieldItem } from '../form-field-item/form-field-item';
@Component({
  selector: 'app-form-field-list',
  imports: [CommonModule, AccordionModule, FormFieldItem, SortablejsModule, UIICon],
  templateUrl: './form-field-list.html',
})
export class FormFieldList {
  sortableConfig: Options = {
    group: {
      name: 'shared',
      pull: 'clone',
      put: false,
    },
    animation: 300,
    sort: false,
  };
}
