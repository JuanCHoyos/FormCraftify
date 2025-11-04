import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { UISidebar } from '@shared/components/index';
import { AsidePosition } from '@shared/types/ui.types';

@Component({
  selector: 'form-settings-panel',
  imports: [CommonModule, UISidebar],
  templateUrl: './form-settings-panel.html',
})
export class FormSettingsPanel {
  isCollapsed = signal<boolean>(false);
  AsidePosition = AsidePosition;
}
