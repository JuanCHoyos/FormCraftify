import { Directive, ElementRef, inject, input, signal } from '@angular/core';

@Directive({
  selector: '[scrollThresholdWatcher]',
  standalone: true,
  exportAs: 'scrollThresholdWatcher',
  host: {
    '(scroll)': 'onScroll()',
  },
})
export class ScrollThresholdWatcher {
  private readonly host = inject(ElementRef<HTMLElement>);
  readonly threshold = input<number>(25);

  private readonly _isScrollThresholdReached = signal(false);
  readonly isScrollThresholdReached = this._isScrollThresholdReached.asReadonly();

  onScroll(): void {
    const el = this.host.nativeElement;
    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight - el.clientHeight;
    const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    this._isScrollThresholdReached.set(percent >= this.threshold());
  }

  scrollToTop(): void {
    this.host.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
