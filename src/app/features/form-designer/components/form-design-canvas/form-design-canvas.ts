import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import {
  AlignType,
  FormType,
  GroupFieldType,
  SeverityType,
  WrapperType,
} from '@core/formly/models/form-field-item';
import { FormDesignNavigation } from '@features/form-designer/services/form-design-navigation';
import { UIICon } from '@shared/components/index';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectModule } from 'primeng/select';

import { NavigationMode } from '../../model/form-designer';
import { FormCanvasFooter, FormCanvasHeader, FormCanvasSections } from './components';

@Component({
  selector: 'app-form-design-canvas',
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
  templateUrl: './form-design-canvas.html',
  styles: `
    :host {
      height: 100%;
    }
  `,
})
export class FormDesignCanvas implements AfterViewInit {
  canvasPanelContainer = viewChild<ElementRef>('canvasPanelContainer');

  public readonly formDesignNavigation = inject(FormDesignNavigation);
  NavigationMode = NavigationMode;
  fields = signal<GroupFieldType>({
    key: 'dsfgsdf',
    type: FormType.group,
    wrappers: [WrapperType.Field],
    props: {
      label: '1',
      cols: 1,
      required: true,
      readonly: false,
      disabled: false,
      tabindex: 1,
    },
    fieldGroup: [
      {
        key: 'userInfo',
        type: FormType.group,
        wrappers: [WrapperType.Field],
        props: {
          cols: 2,
          label: 'User Information',
          required: true,
          readonly: false,
          disabled: false,
          tabindex: 1,
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
          required: true,
          readonly: false,
          disabled: false,
          tabindex: 1,
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
      this.formDesignNavigation.buildSections(this.fields());
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
