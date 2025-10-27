import { Directive, model } from '@angular/core';

@Directive({
  selector: '[dropHover]',
  host: {
    '[class.bg-primary-100]': 'isHovering()',
    '[class.border]': 'isHovering()',
    '[class.border-dashed]': 'isHovering()',
    '[class.border-primary-500]': 'isHovering()',
    '(dragenter)': 'onDragStateChange(true, $event)',
    '(dragover)': 'onDragStateChange(true, $event)',
    '(dragleave)': 'onDragStateChange(false, $event)',
    '(drop)': 'onDragStateChange(false, $event)',
    '(dragend)': 'onDragStateChange(false, $event)',
  },
})
export class DropHover {
  public readonly isHovering = model(false);

  onDragStateChange(isInside: boolean, event: DragEvent) {
    const target = event.currentTarget as HTMLElement;
    const related = event.relatedTarget as HTMLElement | null;
    if (related && target.contains(related)) return;
    this.isHovering.set(isInside);
  }
}
