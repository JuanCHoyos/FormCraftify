import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormDesignerNavigation } from '@features/form-designer/services/form-designer-navigation';
import { KeyboardArrowNavigation, UIICon } from '@shared/components/index';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-form-canvas-footer',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    ProgressBarModule,
    SelectModule,
    KeyboardArrowNavigation,
    UIICon,
  ],
  templateUrl: './form-canvas-footer.html',
})
export class FormCanvasFooter {
  public readonly formDesignNavigation = inject(FormDesignerNavigation);
}
