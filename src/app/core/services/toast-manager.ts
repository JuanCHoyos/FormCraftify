import { inject, Injectable, signal } from '@angular/core';
import { MessageService } from 'primeng/api';
interface ToastType {
  header: string;
  message: string;
  severity: SeverityType;
}
enum SeverityType {
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warn',
}

@Injectable({
  providedIn: 'root',
})
export class ToastManager {
  private readonly messageService = inject(MessageService);
  private readonly LIFE_TIME = signal<number>(7000);

  info(options: Omit<ToastType, 'severity'>) {
    this.showMessage({ severity: SeverityType.INFO, ...options });
  }

  success(options: Omit<ToastType, 'severity'>) {
    this.showMessage({ severity: SeverityType.SUCCESS, ...options });
  }

  warning(options: Omit<ToastType, 'severity'>) {
    this.showMessage({ severity: SeverityType.WARNING, ...options });
  }

  error(options: Omit<ToastType, 'severity'>) {
    this.showMessage({ severity: SeverityType.ERROR, ...options });
  }

  showMessage(options: ToastType) {
    this.messageService.clear();
    this.messageService.add({
      life: this.LIFE_TIME(),
      summary: options.header,
      detail: options.message,
      severity: options.severity,
    });
  }
}
