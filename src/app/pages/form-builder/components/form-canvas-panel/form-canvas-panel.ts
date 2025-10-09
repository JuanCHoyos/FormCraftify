import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  inject,
  OnDestroy,
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
export class FormCanvasPanel implements AfterViewInit, OnDestroy {
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

        props: { label: 'Personal data' },
        fieldGroup: [],
      },
      {
        id: '2',
        props: { label: 'Destination' },
        fieldGroup: [
          {
            key: 'country',
            type: 'input',
            props: {
              label: 'Country',
              required: true,
            },
          },
          {
            key: 'country',
            type: 'input',
            props: {
              label: 'Country',
              required: true,
            },
          },
          {
            key: 'country<<',
            props: {
              label: 'Countryaa',
              required: true,
            },
            fieldGroup: [
              {
                key: 'country<<',
                type: 'input',
                props: {
                  label: 'CountryA',
                  required: true,
                },
              },
              {
                key: 'countryAA',
                type: 'input',
                props: {
                  label: 'CountryB',
                  required: true,
                },
              },
            ],
          },
        ],
      },
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
  });
  isScrollAvailable = signal(false);

  constructor() {
    effect(() => {
      this.formCanvasNavigation.buildSections(this.fields());
    });
  }

  ngAfterViewInit() {
    const container = this.canvasPanelContainer()?.nativeElement;
    if (!container) return;
    //container.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy(): void {
    const container = this.canvasPanelContainer()?.nativeElement;
    if (!container) return;
    container.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const container = this.canvasPanelContainer()?.nativeElement;
    if (!container) return;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    this.isScrollAvailable.set(scrollPercentage > 10);
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
