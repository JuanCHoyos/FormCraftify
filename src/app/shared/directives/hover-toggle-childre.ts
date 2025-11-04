import { AfterViewInit, computed, Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[hoverToggleChild]',
  host: {
    '(mouseenter)': 'toggleState(true)',
    '(mouseleave)': 'toggleState( false)',
  },
})
export class HoverToggleChild implements AfterViewInit {
  private readonly element = inject(ElementRef<HTMLElement>);

  readonly targets = input.required<string[]>();
  readonly activeClass = input.required<string>();
  readonly inactiveClass = input.required<string>();
  readonly targetElements = computed<HTMLElement[]>(() => {
    return this.targets().map((sel) => this.element.nativeElement.querySelector(sel));
  });

  ngAfterViewInit(): void {
    this.toggleState(false);
  }

  private applyActiveClasses(target: HTMLElement) {
    target.classList.remove(this.inactiveClass());
    target.classList.add(this.activeClass());
  }

  private applyInactiveClasses(target: HTMLElement) {
    target.classList.remove(this.activeClass());
    target.classList.add(this.inactiveClass());
  }

  toggleState(isActive: boolean) {
    this.targetElements().forEach((target) => {
      if (isActive) return this.applyActiveClasses(target);
      return this.applyInactiveClasses(target);
    });
  }
}
