import { Directive, inject, input, TemplateRef } from '@angular/core';

export interface GenericTemplateContext<T> {
  $implicit: T;
  index: number;
}
@Directive({
  selector: 'ng-template[appGenericContextGuard]',
})
export class GenericTemplateGuard<T> {
  public templateRef = inject(TemplateRef<GenericTemplateContext<T>>);

  appGenericContextGuard = input<T>();

  static ngTemplateContextGuard<T>(
    dir: GenericTemplateGuard<T>,
    ctx: unknown,
  ): ctx is GenericTemplateContext<T> {
    return true;
  }
}
