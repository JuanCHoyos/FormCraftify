import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormBuilder } from '@pages/form-builder/form-builder';
import { Options } from 'sortablejs';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormBuilder],
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
