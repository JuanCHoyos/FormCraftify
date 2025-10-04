import { CommonModule } from '@angular/common';
import { Component, computed, output, signal, ViewChild } from '@angular/core';
import { HeroIcon } from '@shared/icon/constants/icons';
import { UIICon } from '@shared/icon/ui-icon';
import { Heading, UITitle } from '@shared/index';
import { ButtonModule } from 'primeng/button';
import { Popover, PopoverModule } from 'primeng/popover';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-form-navbar',
  imports: [CommonModule, ButtonModule, PopoverModule, TooltipModule, UITitle, UIICon],
  templateUrl: './form-navbar.html',
})
export class FormNavbar {
  @ViewChild('menuTemplate') menuTemplate!: Popover;
  Heading = Heading;
  menu = signal<
    {
      label: string;
      icon: HeroIcon;
      visibleOn: ('mobile' | 'desktop' | 'all')[];
      command: ($event: Event) => void;
      disabled?: boolean;
    }[]
  >([
    {
      label: '',
      icon: 'lucideUndo',
      visibleOn: ['all'],
      command: () => {
        console.log('');
      },
    },
    {
      label: '',
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
      label: '',
      icon: 'lucideEllipsis',
      visibleOn: ['mobile'],
      command: (event: Event) => {
        this.menuTemplate.toggle(event);
      },
    },
  ]);

  toggleFormInputsPanel = output<boolean>();

  menuShowOnMobile = computed(() => {
    return this.menu().filter((item) => item.visibleOn.includes('desktop'));
  });

  closeMenu() {
    this.menuTemplate.hide();
  }

  openFormInputsPanel() {
    this.toggleFormInputsPanel.emit(true);
  }
}
