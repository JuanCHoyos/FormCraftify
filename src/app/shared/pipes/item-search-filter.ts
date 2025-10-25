import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';
@Pipe({
  name: 'search',
})
export class ItemSearchFilter implements PipeTransform {
  transform<T>(items: T[], searchText: string, fields: string[]): T[] {
    if (!items || !searchText?.trim()) return items ?? [];

    const term = this.normalizeText(searchText);

    return items.map((item) => this.filterItem(item, fields, term)).filter((i): i is T => !!i);
  }

  private filterItem<T>(item: T, fields: string[], searchText: string): T | null {
    let match = false;

    const cloned = _.cloneDeep(item);

    for (const path of fields) {
      const result = this.getNestedValue(item, path);

      if (Array.isArray(result)) {
        const filtered = result
          .map((sub) => this.filterSubItem(sub, path, searchText))
          .filter((v) => v !== null);

        if (filtered.length > 0) {
          (cloned as Record<string, unknown>)[this.extractArrayKey(path)] = filtered;
          match = true;
        }
      } else if (this.matchValue(result, searchText)) {
        match = true;
      }
    }

    return match ? cloned : null;
  }

  private filterSubItem<T>(sub: unknown, path: string, term: string): T | null {
    if (typeof sub === 'object' && sub !== null) {
      return this.filterItem(sub as T, [this.extractSubPath(path)], term);
    }

    return this.matchValue(sub, term) ? (sub as T) : null;
  }

  private getNestedValue<T>(obj: T, key: string): unknown {
    return key.split('.').reduce<unknown>((acc, part) => {
      if (Array.isArray(acc)) {
        return acc;
      }
      if (acc && typeof acc === 'object' && part in acc) {
        return (acc as Record<string, unknown>)[part];
      }
      return undefined;
    }, obj as unknown);
  }

  private extractArrayKey(path: string): string {
    return path.split('.')[0];
  }

  private extractSubPath(path: string): string {
    return path.split('.').slice(1).join('.');
  }

  private matchValue(value: unknown, term: string): boolean {
    if (value == null) return false;
    if (typeof value === 'string') return this.normalizeText(value).includes(term);
    if (typeof value === 'number' || typeof value === 'boolean')
      return this.normalizeText(String(value)).includes(term);
    return false;
  }

  private normalizeText(text: string): string {
    return text
      .normalize('NFD')
      .replaceAll(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }
}
