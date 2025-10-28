import { CommonModule } from '@angular/common';
import { Component, computed, inject, output, viewChild } from '@angular/core';
import { FormDesignerStore } from '@features/form-designer/services/form-designer-store';
import { UIICon, UITitle } from '@shared/components/index';
import { HeadingType } from '@shared/types/ui.types';
import { UIButtonProps } from '@shared/types/ui-button-props';
import { ButtonModule } from 'primeng/button';
import { Popover, PopoverModule } from 'primeng/popover';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-form-design-navbar',
  imports: [CommonModule, ButtonModule, PopoverModule, TooltipModule, UITitle, UIICon],
  templateUrl: './form-design-navbar.html',
})
export class FormDesignNavbar {
  public readonly formDesignerStore = inject(FormDesignerStore);
  menuTemplate = viewChild.required<Popover>('menuTemplate');
  HeadingType = HeadingType;
  navbarMenuItems = computed<UIButtonProps<Event>[]>(() => [
    {
      id: 'form-designer:undo',
      icon: 'lucideUndo',
      visibleOn: ['all'],
      disabled: this.formDesignerStore.FormDesignerHistory.isFirstState(),
      command: () => this.formDesignerStore.undo(),
    },
    {
      id: 'form-designer:redo',
      icon: 'lucideRedo',
      visibleOn: ['all'],
      disabled: this.formDesignerStore.FormDesignerHistory.isLastState(),
      command: () => this.formDesignerStore.redo(),
    },
    {
      id: 'form-designer:save',
      icon: 'lucideSave',
      visibleOn: ['all'],
      command: () => console.log('save'),
    },
    {
      id: 'form-designer:preview',
      label: 'Preview',
      icon: 'lucideEye',
      visibleOn: ['desktop'],
      command: () => {
        console.log('preview');
        this.closeMenu();
      },
    },
    {
      id: 'form-designer:export',
      label: 'Export',
      icon: 'lucideDownload',
      visibleOn: ['desktop'],
      command: () => {
        console.log('export');
        this.closeMenu();
      },
    },
    {
      id: 'form-designer:settings',
      label: 'Settings',
      icon: 'lucideSettings',
      visibleOn: ['desktop'],
      command: () => {
        console.log('settings');
        this.closeMenu();
      },
    },
    {
      id: 'form-designer:theme',
      label: 'Theme',
      icon: 'lucideMoon',
      visibleOn: ['desktop'],
      command: () => {
        console.log('theme');
        this.closeMenu();
      },
    },
    {
      id: 'form-designer:menu-toggle',
      icon: 'lucideEllipsis',
      visibleOn: ['mobile'],
      command: (event: Event) => this.menuTemplate().toggle(event),
    },
  ]);

  toggleFormElementsPanel = output<boolean>();

  menuShowOnMobile = computed(() => {
    return this.navbarMenuItems().filter((item) => item.visibleOn?.includes('desktop'));
  });

  closeMenu() {
    this.menuTemplate().hide();
  }

  openFormElementsPanel() {
    this.toggleFormElementsPanel.emit(true);
  }
  command(event: Event, item: UIButtonProps<Event>) {
    if (item.command) {
      item.command(event);
    }
  }
}
