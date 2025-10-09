import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  output,
  Renderer2,
  signal,
} from '@angular/core';

@Directive({
  selector: '[appArrowNavigation]',
  standalone: true,
})
export class ArrowNavigation {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  arrowLeft = output<void>();
  arrowRight = output<void>();
  arrowUp = output<void>();
  arrowDown = output<void>();

  private readonly isFocused = signal<boolean>(false);

  constructor() {
    this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '0');
  }

  @HostListener('focus')
  onFocus() {
    this.isFocused.set(true);
  }

  @HostListener('blur')
  onBlur() {
    this.isFocused.set(false);
  }

  @HostListener('keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.isFocused()) return;

    switch (event.key) {
      case 'ArrowLeft':
        this.arrowLeft.emit();
        break;
      case 'ArrowRight':
        this.arrowRight.emit();
        break;
      case 'ArrowUp':
        this.arrowUp.emit();
        break;
      case 'ArrowDown':
        this.arrowDown.emit();
        break;
    }
  }
}
