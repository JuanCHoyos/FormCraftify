import { Component } from '@angular/core';
import { UIICon, UITitle } from '@shared/components/index';
import { HeadingType } from '@shared/types/ui.types';

@Component({
  selector: 'app-form-canvas-empty-message',
  imports: [UIICon, UITitle],
  templateUrl: './form-canvas-empty-message.html',
})
export class FormCanvasEmptyMessage {
  HeadingType = HeadingType;
}
