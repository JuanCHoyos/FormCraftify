import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormDesigner } from '@features/form-designer/form-designer';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ToastModule, FormDesigner],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Hello, FormCraftify');
}
