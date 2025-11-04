import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDesignerStore } from '@features/form-designer/services/form-designer-store';
import { FormlyForm } from '@ngx-formly/core';
import { DialogService } from 'primeng/dynamicdialog';
@Component({
  selector: 'form-designer-preview',
  imports: [CommonModule, ReactiveFormsModule, FormlyForm],
  providers: [DialogService],
  templateUrl: './form-designer-preview.html',
  styles: `
    :host {
      height: 100%;
    }
  `,
})
export class FormDesignerPreview {
  public readonly formDesignerStore = inject(FormDesignerStore);
}
