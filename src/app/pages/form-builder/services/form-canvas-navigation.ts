import { computed, Injectable, signal } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { CanvasMode, NavigationMode, Section } from '../model/form-builder';

@Injectable({
  providedIn: 'root',
})
export class FormCanvasNavigation {
  sectionList = signal<Section[]>([]);
  activeSectionIndex = signal<number>(0);
  viewMode = signal<NavigationMode>(NavigationMode.SCROLL);
  viewModeOptions = signal<CanvasMode[]>([
    { label: 'Scroll', value: NavigationMode.SCROLL, icon: 'lucideScrollText' },
    { label: 'Section', value: NavigationMode.SECTION, icon: 'lucideFileText' },
  ]);

  progressPercentage = computed(() => {
    const total = this.sectionList().length || 1;
    return ((this.activeSectionIndex() + 1) / total) * 100;
  });

  buildSections(fields: FormlyFieldConfig): void {
    const fieldGroups = fields?.fieldGroup ?? [];
    const sections = fieldGroups.length
      ? fieldGroups.map((_, index) => ({
          label: `Section ${index + 1}`,
          value: index,
        }))
      : [{ label: 'Section 1', value: 0 }];
    this.sectionList.set(sections);
  }

  setViewMode(mode: NavigationMode): void {
    this.viewMode.set(mode);
    this.handleViewModeChange();
  }

  handleViewModeChange(): void {
    if (this.isViewSectionMode()) {
      this.activeSectionIndex.set(0);
    }
  }

  goToNextSection(): void {
    const index = this.activeSectionIndex();
    if (index < this.sectionList().length - 1) {
      this.activeSectionIndex.set(index + 1);
    }
  }

  goToPreviousSection(): void {
    const index = this.activeSectionIndex();
    if (index > 0) {
      this.activeSectionIndex.set(index - 1);
    }
  }

  isViewSectionMode() {
    return this.viewMode() === NavigationMode.SECTION;
  }

  isViewScrollMode() {
    return this.viewMode() === NavigationMode.SCROLL;
  }
}
