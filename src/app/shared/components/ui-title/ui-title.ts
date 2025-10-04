import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

export enum Heading {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
}
@Component({
  selector: 'ui-title',
  imports: [CommonModule],
  templateUrl: './ui-title.html',
})
export class UITitle {
  heading = input.required<Heading>();
  Heading = Heading;
}
