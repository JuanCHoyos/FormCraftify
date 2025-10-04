import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Heading, UITitle } from '@shared/index';

@Component({
  selector: 'app-canvas-header',
  imports: [CommonModule, UITitle],
  templateUrl: './canvas-header.html',
})
export class FormCanvasHeader {
  Heading = Heading;
}
