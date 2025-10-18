import { CommonModule } from '@angular/common';
import { Component, computed, output, signal, viewChild } from '@angular/core';
import { UIICon, UITitle } from '@shared/components/index';
import { HeadingType, LucideIconType } from '@shared/types/ui.types';
import { ButtonModule } from 'primeng/button';
import { Popover, PopoverModule } from 'primeng/popover';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-form-design-navbar',
  imports: [CommonModule, ButtonModule, PopoverModule, TooltipModule, UITitle, UIICon],
  templateUrl: './form-design-navbar.html',
})
export class FormDesignNavbar {
  menuTemplate = viewChild.required<Popover>('menuTemplate');
  HeadingType = HeadingType;
  menu = signal<
    {
      label: string;
      icon: LucideIconType;
      visibleOn: ('mobile' | 'desktop' | 'all')[];
      command: ($event: Event) => void;
      disabled?: boolean;
    }[]
  >([
    {
      label: '.',
      icon: 'lucideUndo',
      visibleOn: ['all'],
      command: () => {
        console.log('');
      },
    },
    {
      label: '..',
      icon: 'lucideRedo',
      visibleOn: ['all'],
      command: () => {
        console.log('');
      },
    },
    {
      label: 'Save',
      icon: 'lucideSave',
      visibleOn: ['all'],
      command: () => {
        console.log('');
      },
    },
    {
      label: 'Preview',
      icon: 'lucideEye',
      visibleOn: ['desktop'],
      command: () => {
        console.log('');
        this.closeMenu();
      },
    },
    {
      label: 'Export',
      icon: 'lucideDownload',
      visibleOn: ['desktop'],
      command: () => {
        console.log('');
        this.closeMenu();
      },
    },
    {
      label: 'Settings',
      icon: 'lucideSettings',
      visibleOn: ['desktop'],
      command: () => {
        console.log('');
        this.closeMenu();
      },
    },
    {
      label: 'Theme',
      icon: 'lucideMoon',
      visibleOn: ['desktop'],
      command: () => {
        console.log('');
        this.closeMenu();
      },
    },
    {
      label: '...',
      icon: 'lucideEllipsis',
      visibleOn: ['mobile'],
      command: (event: Event) => {
        this.menuTemplate().toggle(event);
      },
    },
  ]);

  toggleFormElementsPanel = output<boolean>();

  menuShowOnMobile = computed(() => {
    return this.menu().filter((item) => item.visibleOn.includes('desktop'));
  });

  closeMenu() {
    this.menuTemplate().hide();
  }

  openFormElementsPanel() {
    this.toggleFormElementsPanel.emit(true);
  }
}
