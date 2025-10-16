import { computed, effect, Injectable, signal } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { CanvasMode, NavigationMode, Section } from '../model/form-builder';

@Injectable({
  providedIn: 'root',
})
export class FormCanvasNavigation {
  sectionList = signal<Section[]>([]);
  viewModeOptions = signal<CanvasMode[]>([
    { label: 'Scroll', value: NavigationMode.SCROLL, icon: 'lucideScrollText' },
    { label: 'Section', value: NavigationMode.SECTION, icon: 'lucideFileText' },
  ]);
  viewMode = signal<NavigationMode>(NavigationMode.SCROLL);
  activeSectionIndex = signal<number>(0);

  progressPercentage = computed(() => {
    const total = this.sectionList().length || 1;
    return ((this.activeSectionIndex() + 1) / total) * 100;
  });
  isPreviousSectionActive = computed<boolean>(() => this.activeSectionIndex() > 0);
  isNextSectionActive = computed<boolean>(
    () => this.activeSectionIndex() < this.sectionList().length - 1,
  );

  constructor() {
    effect(() => {
      this.viewMode();
      this.activeSectionIndex.set(0);
    });
  }

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

  goToSection(index: number) {
    if (index < 0 || index >= this.sectionList().length) return;
    this.activeSectionIndex.set(index);
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
}
