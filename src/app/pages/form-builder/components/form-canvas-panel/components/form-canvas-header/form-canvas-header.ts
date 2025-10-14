import { CommonModule } from '@angular/common';
import { Component, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormCanvasNavigation } from '@pages/form-builder/services/form-canvas-navigation';
import { UIICon, UIMenuPopover, UITitle } from '@shared/components/index';
import { HeadingType, MenuItemType } from '@shared/types/ui.types';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-canvas-header',
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
  public readonly formCanvasNavigation = inject(FormCanvasNavigation);
  HeadingType = HeadingType;

  items = signal<MenuItemType[]>([
    {
      id: 'empty-section',
      label: 'Sección Vacía',
      description: 'Comienza desde cero',
      icon: 'lucideFilePlus',
    },
    {
      id: 'contact-section',
      label: 'Formulario de contacto',
      description: 'Nombre, Apellidos, Correo, teléfono y mensaje',
      icon: 'lucideContainer',
    },
    {
      id: 'personal-section',
      label: 'Datos personales',
      description: 'Nombre, Apellidos, Correo, teléfono, fecha y género',
      icon: 'lucideList',
    },
  ]);

  open(target: PointerEvent | Event) {
    this.menuPopover().toggle(target);
  }
}
