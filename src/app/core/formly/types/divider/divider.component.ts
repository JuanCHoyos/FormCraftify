import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [],
  template: `<hr />`,
})
export class DividerComponent extends FieldType {}
