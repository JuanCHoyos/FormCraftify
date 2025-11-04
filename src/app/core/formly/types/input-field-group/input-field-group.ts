import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldWrapper, FormlyField } from '@ngx-formly/core';

@Component({
  selector: 'input-field-alert',
  imports: [CommonModule, FormlyField],
  templateUrl: './input-field-group.html',
})
export class InputFieldGroup extends FieldWrapper {}
