import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'input-field-divider',
  template: `<hr />`,
})
export class InputFieldDivider extends FieldType {}
