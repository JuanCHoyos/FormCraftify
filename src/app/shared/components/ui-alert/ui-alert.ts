import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import {
  AlignType,
  SeverityType,
  TextFormattingOptionType,
} from '@core/formly/models/form-field-item';
import { UIICon } from '@shared/components';
import { LucideIconType } from '@shared/types/ui.types';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'ui-alert',
  imports: [CommonModule, MessageModule, UIICon],
  templateUrl: './ui-alert.html',
  styleUrl: './ui-alert.scss',
})
export class UIAlert {
  severity = input.required<SeverityType>();
  bold = input<boolean>(false);
  strikethrough = input<boolean>(false);
  italic = input<boolean>(false);
  underline = input<boolean>(false);
  align = input<AlignType>(AlignType.Left);

  TextFormattingOptionType = TextFormattingOptionType;
  severityIcon = computed<LucideIconType>(() => {
    const type = this.severity();
    const options: Record<SeverityType, LucideIconType> = {
      error: 'lucideCircleX',
      info: 'lucideCircleAlert',
      success: 'lucideCircleCheck',
      warn: 'lucideTriangleAlert',
    };

    return options[type];
  });
}
