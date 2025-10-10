import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormCanvasNavigation } from '@pages/form-builder/services/form-canvas-navigation';
import { UIICon } from '@shared/index';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectModule } from 'primeng/select';

import { NavigationMode } from '../../model/form-builder';
import { FormCanvasFooter } from './components/form-canva-footer/form-canvas-footer';
import { FormCanvasHeader } from './components/form-canvas-header/form-canvas-header';
import { FormCanvasSections } from './components/form-canvas-sections/form-canvas-sections';

@Component({
  selector: 'app-form-canvas-panel',
  imports: [
    CommonModule,
    ButtonModule,
    SelectModule,
    ProgressBarModule,
    FormCanvasFooter,
    FormCanvasSections,
    FormCanvasHeader,
    UIICon,
  ],
  templateUrl: './form-canvas-panel.html',
  styles: `
    :host {
      height: 100%;
    }
  `,
})
export class FormCanvasPanel implements AfterViewInit {
  canvasPanelContainer = signal<ElementRef | null>(null);
  @ViewChild('canvasPanelContainer') set canvasPanelContainerRef(ref: ElementRef) {
    this.canvasPanelContainer.set(ref);
  }

  public readonly formCanvasNavigation = inject(FormCanvasNavigation);
  NavigationMode = NavigationMode;
  fields = signal<FormlyFieldConfig>({
    fieldGroup: [
      {
        id: '1',
        key: 'personalData',
        props: { label: 'Personal data' },
        fieldGroup: [],
      },
      {
        id: '2',
        key: 'destination',
        props: { label: 'Destination' },
        fieldGroup: [
          {
            key: 'destination_country_1',
            type: 'input',
            props: {
              label: 'Country',
              required: true,
            },
          },
          {
            key: 'destination_country_2',
            type: 'input',
            props: {
              label: 'Country',
              required: true,
            },
          },
          {
            key: 'destination_country_group',
            props: {
              label: 'Country group',
              required: true,
              cols: 2,
            },
            fieldGroup: [
              {
                key: 'destination_country_group_countryA',
                type: 'input',
                props: {
                  label: 'Country A',
                  required: true,
                },
              },
              {
                key: 'destination_country_group_countryB',
                type: 'input',
                props: {
                  label: 'Country B',
                  required: true,
                },
              },
            ],
          },
        ],
      },
      {
        id: '3',
        key: 'tripDay',
        props: { label: 'Day of the trip' },
        fieldGroup: [
          {
            key: 'tripDay_date',
            type: 'input',
            props: {
              type: 'date',
              label: 'Day of the trip',
              required: true,
            },
          },
        ],
      },
    ],
  });
  isScrollAvailable = signal(false);

  constructor() {
    effect(() => {
      this.formCanvasNavigation.buildSections(this.fields());
    });
  }

  ngAfterViewInit(): void {
    const container: HTMLDivElement = this.canvasPanelContainer()?.nativeElement;
    if (!container) return;
    container.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const container = this.canvasPanelContainer()?.nativeElement;
    if (!container) return;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    this.isScrollAvailable.set(scrollPercentage > 25);
  };

  addSection() {
    const updatedFields = {
      ...this.fields(),
      fieldGroup: [
        ...(this.fields().fieldGroup ?? []),
        {
          id: '2',
          props: { label: 'Day of the trip' },
          fieldGroup: [
            {
              key: 'day',
              type: 'input',
              props: {
                type: 'date',
                label: 'Day of the trip',
                required: true,
              },
            },
          ],
        },
      ],
    };

    this.fields.set(updatedFields);
  }

  scrollToTop(): void {
    const container = this.canvasPanelContainer()?.nativeElement;
    if (!container) return;

    container.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
