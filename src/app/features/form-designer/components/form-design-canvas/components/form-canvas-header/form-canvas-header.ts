import { CommonModule } from '@angular/common';
import { Component, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormDesignNavigation } from '@features/form-designer/services/form-design-navigation';
import { UIICon, UIMenuPopover, UITitle } from '@shared/components/index';
import { HeadingType, MenuItemType } from '@shared/types/ui.types';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-form-canvas-header',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    PopoverModule,
    SelectButtonModule,
    UIICon,
    UIMenuPopover,
    UITitle,
  ],
  templateUrl: './form-canvas-header.html',
})
export class FormCanvasHeader {
  private readonly menuPopover = viewChild.required<UIMenuPopover>('sectionMenu');
  public readonly formDesignNavigation = inject(FormDesignNavigation);
  HeadingType = HeadingType;

  items = signal<MenuItemType[]>([
    {
      id: 'empty-section',
      label: 'Empty Section',
      description: 'Start from scratch',
      icon: 'lucideFilePlus',
    },
    {
      id: 'contact-section',
      label: 'Contact Form',
      description: 'Name, Email, Phone and Message',
      icon: 'lucideContainer',
    },
    {
      id: 'personal-section',
      label: 'Personal Data',
      description: 'Name, Email, Phone, Date and Gender',
      icon: 'lucideList',
    },
  ]);

  open(target: PointerEvent | Event) {
    this.menuPopover().toggle(target);
  }
}
