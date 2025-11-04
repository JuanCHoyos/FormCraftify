import { CdkScrollable } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormDesignerNavigation } from '@features/form-designer/services/form-designer-navigation';
import { FormDesignerStore } from '@features/form-designer/services/form-designer-store';
import { ScrollThresholdWatcher, UIICon } from '@shared/components/index';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectModule } from 'primeng/select';

import { FormCanvasFooter, FormCanvasHeader, FormCanvasSections } from './components';

@Component({
  selector: 'form-designer-canvas',
  imports: [
    CommonModule,
    ButtonModule,
    ProgressBarModule,
    SelectModule,
    FormCanvasFooter,
    FormCanvasSections,
    FormCanvasHeader,
    ScrollThresholdWatcher,
    CdkScrollable,
    UIICon,
  ],
  templateUrl: './form-designer-canvas.html',
  styles: `
    :host {
      height: 100%;
    }
  `,
})
export class FormDesignerCanvas {
  public readonly formDesignerNavigation = inject(FormDesignerNavigation);
  public readonly formDesignerStore = inject(FormDesignerStore);
}
