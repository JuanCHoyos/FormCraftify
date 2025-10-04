import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder } from '@pages/form-builder/form-builder';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormBuilder],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Hello, FormCraftify');
}
