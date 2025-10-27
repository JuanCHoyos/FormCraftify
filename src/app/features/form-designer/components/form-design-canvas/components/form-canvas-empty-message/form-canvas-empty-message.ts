import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { UIICon, UITitle } from '@shared/components/index';
import { DropHover } from '@shared/directives/drop-hover';
import { HeadingType } from '@shared/types/ui.types';

@Component({
  selector: 'app-form-canvas-empty-message',
  imports: [CommonModule, DropHover, UIICon, UITitle],
  templateUrl: './form-canvas-empty-message.html',
})
export class FormCanvasEmptyMessage {
  HeadingType = HeadingType;
  whileDragging = input<boolean>(false);
}
