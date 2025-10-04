import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { UISidebar } from '@shared/index';

import { AsidePosition } from '../../../../shared/components/ui-sidebar/ui-sidebar';

@Component({
  selector: 'app-form-settings-panel',
  imports: [CommonModule, UISidebar],
  templateUrl: './form-settings-panel.html',
})
export class FormSettingsPanel {
  isCollapsed = signal<boolean>(false);
  AsidePosition = AsidePosition;
}
