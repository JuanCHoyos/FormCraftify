import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'field-wrapper',
  imports: [CommonModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './field-wrapper.html',
})
export class InputFieldWrapper extends FieldWrapper {}
