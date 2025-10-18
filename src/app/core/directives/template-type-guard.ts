import { Directive, inject, input, TemplateRef } from '@angular/core';

export interface GenericTemplateContext<T> {
  $implicit: T;
}
@Directive({
  selector: 'ng-template[appGenericContextGuard]',
})
export class GenericTemplateTypeGuard<T> {
  public templateRef = inject(TemplateRef<GenericTemplateContext<T>>);

  appGenericContextGuard = input<T>();

  static ngTemplateContextGuard<T>(
    dir: GenericTemplateTypeGuard<T>,
    ctx: unknown,
  ): ctx is GenericTemplateContext<T> {
    return true;
  }
}
