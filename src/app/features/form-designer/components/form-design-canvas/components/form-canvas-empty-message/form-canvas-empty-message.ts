import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { GroupFieldType } from '@core/formly/models/form-field-item';
import { UIICon, UITitle } from '@shared/components/index';
import { DropHover } from '@shared/directives/drop-hover';
import { HeadingType } from '@shared/types/ui.types';
import { SortablejsModule } from 'nxt-sortablejs';
import { SortableOptions } from 'sortablejs';

@Component({
  selector: 'app-form-canvas-empty-message',
  imports: [CommonModule, DropHover, UIICon, UITitle, SortablejsModule],
  templateUrl: './form-canvas-empty-message.html',
})
export class FormCanvasEmptyMessage {
  groupField = input.required<GroupFieldType>();
  sortableConfig = input.required<SortableOptions>();
  HeadingType = HeadingType;
}
