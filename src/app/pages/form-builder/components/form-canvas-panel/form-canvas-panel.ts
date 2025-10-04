import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UIICon } from '@shared/index';
import { ButtonModule } from 'primeng/button';

import { AddComponentPlaceholder } from './components/add-component-placeholder/add-component-placeholder';
import { FormCanvasEmptyMessage } from './components/empty-message/canvas-empty-message';
import { FormCanvasHeader } from './components/header/canvas-header';

@Component({
  selector: 'app-form-canvas-panel',
  imports: [
    CommonModule,
    ButtonModule,
    AddComponentPlaceholder,
    FormCanvasEmptyMessage,
    FormCanvasHeader,
    UIICon,
  ],
  templateUrl: './form-canvas-panel.html',
  styleUrl: './form-canvas-panel.scss',
})
export class FormCanvasPanel {}
