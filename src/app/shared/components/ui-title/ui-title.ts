import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { HeadingType } from '@shared/types/ui.types';

@Component({
  selector: 'ui-title',
  imports: [CommonModule],
  templateUrl: './ui-title.html',
})
export class UITitle {
  heading = input.required<HeadingType>();
  HeadingType = HeadingType;
}
