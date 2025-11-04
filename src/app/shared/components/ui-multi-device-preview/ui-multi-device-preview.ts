import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideIconType } from '@shared/types/ui.types';
import { SelectButtonModule } from 'primeng/selectbutton';

import { UIICon } from '../ui-icon/ui-icon';

enum DeviceType {
  Desktop = 'desktop',
  Mobile = 'mobile',
  Tablet = 'tablet',
}

@Component({
  selector: 'ui-multi-device-preview',
  imports: [CommonModule, FormsModule, SelectButtonModule, UIICon],
  templateUrl: './ui-multi-device-preview.html',
})
export class UIMultiDevicePreview {
  devices: { icon: LucideIconType; value: DeviceType }[] = [
    { icon: 'lucideMonitor', value: DeviceType.Desktop },
    { icon: 'lucideTablet', value: DeviceType.Tablet },
    { icon: 'lucideSmartphone', value: DeviceType.Mobile },
  ];
  device = model<DeviceType>(DeviceType.Desktop);
  DeviceType = DeviceType;
}
