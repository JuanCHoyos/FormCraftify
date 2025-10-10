import { Component } from '@angular/core';
import { UIICon, UITitle } from '@shared/index';

import { Heading } from '../../../../../../shared/components/ui-title/ui-title';

@Component({
  selector: 'app-canvas-empty-message',
  imports: [UIICon, UITitle],
  templateUrl: './canvas-empty-message.html',
})
export class FormCanvasEmptyMessage {
  Heading = Heading;
}
