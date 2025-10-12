import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlertFieldType, TextFormattingOptionType } from '@core/formly/models/form-field-item';
import { FieldWrapper } from '@ngx-formly/core';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, MessageModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent extends FieldWrapper<AlertFieldType> {
  TextFormattingOptionType = TextFormattingOptionType;
}
