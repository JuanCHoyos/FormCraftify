import { computed, signal } from '@angular/core';
import { FormFieldType } from '@core/formly/models/form-field-item';

export class FormDesignerHistory {
  private readonly history = signal<FormFieldType[]>([]);
  private readonly currentIndex = signal<number>(-1);
  private readonly isHistoryLocked = signal<boolean>(false);
  public readonly isFirstState = computed(() => this.currentIndex() === 0);
  public readonly isLastState = computed(() => this.currentIndex() === this.history().length - 1);

  save(field: FormFieldType) {
    if (this.isHistoryLocked()) return;
    if (this.currentIndex() < this.history().length - 1) {
      this.history.update((value) => value.filter((_, index) => index <= this.currentIndex()));
    }

    this.history.update((value) => [...value, field]);
    this.updateCurrentIndex(1);
  }

  undo(): FormFieldType | null {
    if (this.currentIndex() <= 0) return null;

    this.updateCurrentIndex(-1);
    this.pauseHistorySync();

    return this.history()[this.currentIndex()];
  }

  redo(): FormFieldType | null {
    if (this.currentIndex() >= this.history().length - 1) return null;
    this.updateCurrentIndex(1);
    this.pauseHistorySync();
    return this.history()[this.currentIndex()];
  }

  private pauseHistorySync() {
    this.isHistoryLocked.set(true);
    setTimeout(() => {
      this.isHistoryLocked.set(false);
    });
  }

  private updateCurrentIndex(step: number) {
    this.currentIndex.update((value) => value + step);
  }
}
