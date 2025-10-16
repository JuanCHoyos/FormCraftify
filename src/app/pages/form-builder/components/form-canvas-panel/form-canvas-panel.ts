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
import {
  AlignType,
  FormType,
  GroupFieldType,
  SeverityType,
  WrapperType,
} from '@core/formly/models/form-field-item';
import { FormCanvasNavigation } from '@pages/form-builder/services/form-canvas-navigation';
import { UIICon } from '@shared/components/index';
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
  fields = signal<GroupFieldType>({
    key: 'dsfgsdf',
    type: FormType.group,
    wrappers: [WrapperType.Field],
    props: {
      label: '1',
      cols: 1,
    },
    fieldGroup: [
      {
        key: 'userInfo',
        type: FormType.group,
        wrappers: [WrapperType.Field],
        props: {
          cols: 2,
          label: 'User Information',
        },
        fieldGroup: [
          {
            key: 'firstName',
            type: FormType.text,
            wrappers: [WrapperType.Field],
            props: {
              label: 'First Name',
              description: 'Enter your first name',
              tooltip: 'Your given name',
              required: true,
              readonly: false,
              disabled: true,
              tabindex: 1,
              placeholder: 'John',
              minLength: 2,
              maxLength: 50,
            },
          },
          {
            key: 'firstName',
            type: FormType.alert,
            wrappers: [WrapperType.Field],
            props: {
              label: 'First Name',
              description: 'Enter your first name',
              tooltip: 'Your given name',
              required: true,
              readonly: false,
              disabled: true,
              tabindex: 1,
              align: AlignType.Left,
              severity: SeverityType.Info,
              textFormattingOptions: [],
            },
          },
        ],
      },
      {
        key: 'userInfo',
        type: FormType.group,
        wrappers: [WrapperType.Field],
        props: {
          cols: 2,
          label: 'User Information',
        },
        fieldGroup: [
          {
            key: 'firstName',
            type: FormType.text,
            wrappers: [WrapperType.Field],
            props: {
              label: 'First Name',
              description: 'Enter your first name',
              tooltip: 'Your given name',
              required: true,
              readonly: false,
              disabled: false,
              tabindex: 1,
              placeholder: 'John',
              minLength: 2,
              maxLength: 50,
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

  scrollToTop(): void {
    const container = this.canvasPanelContainer()?.nativeElement;
    if (!container) return;

    container.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
