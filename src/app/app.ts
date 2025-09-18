import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyForm } from '@ngx-formly/core';
import { SortablejsModule } from 'nxt-sortablejs';
import { ButtonModule } from 'primeng/button';
import { Options } from 'sortablejs';

import { Icon } from './shared/components/icon/icon';
@Component({
  selector: 'app-root',
  imports: [CommonModule, SortablejsModule, ButtonModule, ReactiveFormsModule, FormlyForm, Icon],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Hello, FormCraftify');
  cloneList1 = ['1', '2', '3', '4', '5'];

  cloneList2 = ['6', '7', '8', '9', '10'];

  clone1Options: Options = {
    group: {
      name: 'clone-group',
      pull: 'clone',
      put: false,
    },
  };

  clone2Options: Options = {
    group: 'clone-group',
  };
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
    },
  ];

  onSubmit(model: unknown) {
    console.log(model);
  }
}
