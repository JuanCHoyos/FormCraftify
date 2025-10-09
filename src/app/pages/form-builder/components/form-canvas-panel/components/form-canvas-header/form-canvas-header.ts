import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormCanvasNavigation } from '@pages/form-builder/services/form-canvas-navigation';
import { Heading, UIICon, UITitle } from '@shared/index';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-canvas-header',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    PopoverModule,
    SelectButtonModule,
    UIICon,
    UITitle,
  ],
  templateUrl: './form-canvas-header.html',
})
export class FormCanvasHeader {
  Heading = Heading;
  public readonly formCanvasNavigation = inject(FormCanvasNavigation);
}
