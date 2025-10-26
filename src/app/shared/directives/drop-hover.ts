import { Directive, ElementRef, inject, signal } from '@angular/core';

@Directive({
  selector: '[dropHover]',
  host: {
    '(dragenter)': 'onDragStateChange(true, $event)',
    '(dragover)': 'onDragStateChange(true, $event)',
    '(dragleave)': 'onDragStateChange(false, $event)',
    '(drop)': 'onDragStateChange(false, $event)',
    '(dragend)': 'onDragStateChange(false, $event)',
  },
})
export class DropHover {
  private readonly element: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);
  private readonly hovering = signal(false);
  private readonly hoverClasses = signal<string[]>([
    'bg-primary-100',
    'border',
    'border-dashed',
    'border-primary-500',
  ]);
  private readonly originalClassList = signal<string[]>([]);

  constructor() {
    const classList = this.element.nativeElement.classList.value.split(' ');
    this.originalClassList.set(classList);
  }

  onDragStateChange(isInside: boolean, event: DragEvent) {
    const target = event.currentTarget as HTMLElement;
    const related = event.relatedTarget as HTMLElement | null;
    if (related && target.contains(related)) return;

    this.hovering.set(isInside);
    this.toggleHoverClasses();
  }

  toggleHoverClasses() {
    if (this.hovering()) {
      return this.element.nativeElement.classList.add(...this.hoverClasses());
    }
    this.element.nativeElement.classList.remove(...this.hoverClasses());
    this.element.nativeElement.classList.add(...this.originalClassList());
  }
}
