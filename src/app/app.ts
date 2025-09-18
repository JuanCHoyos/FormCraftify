import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { SortablejsModule } from 'nxt-sortablejs';
import { Options } from 'sortablejs';
@Component({
  selector: 'app-root',
  imports: [CommonModule, SortablejsModule],
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
}
