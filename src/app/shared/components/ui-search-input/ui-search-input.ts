import { CommonModule } from '@angular/common';
import { Component, effect, input, model, OnDestroy } from '@angular/core';
import { UIICon } from '@shared/icon/ui-icon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { debounceTime, Subject } from 'rxjs';

export enum UISearchVariant {
  filled = 'filled',
  outlined = 'outlined',
}

@Component({
  selector: 'ui-search-input',
  imports: [CommonModule, IconFieldModule, InputIconModule, InputTextModule, UIICon],
  templateUrl: './ui-search-input.html',
})
export class UISearchInput implements OnDestroy {
  private readonly searchSubject = new Subject<string>();
  delay = input<number>(300);
  placeholder = input<string>('Search');
  variant = input<UISearchVariant>(UISearchVariant.filled);
  search = model<string>('');

  constructor() {
    effect(() => {
      this.searchSubject.pipe(debounceTime(this.delay())).subscribe((value) => {
        this.search.set(value.trim());
      });
    });
  }

  ngOnDestroy(): void {
    this.searchSubject.unsubscribe();
  }

  onInputChange(value: string) {
    this.searchSubject.next(value);
  }
}
