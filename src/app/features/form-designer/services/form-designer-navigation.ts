import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { CanvasMode, NavigationMode, Section } from '../model/form-designer';
import { FormDesignerStore } from './form-designer-store';

@Injectable({
  providedIn: 'root',
})
export class FormDesignerNavigation {
  private readonly formDesignerStore = inject(FormDesignerStore);
  sectionList = signal<Section[]>([]);
  viewModeOptions = signal<CanvasMode[]>([
    { label: 'Scroll', value: NavigationMode.SCROLL, icon: 'lucideScrollText' },
    { label: 'Section', value: NavigationMode.SECTION, icon: 'lucideFileText' },
  ]);
  viewMode = signal<NavigationMode>(NavigationMode.SCROLL);
  activeSectionIndex = signal<number>(0);

  isSectionView = computed(() => this.viewMode() === NavigationMode.SECTION);
  isScrollView = computed(() => this.viewMode() === NavigationMode.SCROLL);
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

    effect(() => {
      this.generateSectionList(this.formDesignerStore.fields());
    });
  }

  generateSectionList(fields: FormlyFieldConfig): void {
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
    if (this.isNextSectionActive()) {
      this.activeSectionIndex.update((index) => index + 1);
    }
  }

  goToPreviousSection(): void {
    if (this.isPreviousSectionActive()) {
      this.activeSectionIndex.update((index) => index - 1);
    }
  }
}
