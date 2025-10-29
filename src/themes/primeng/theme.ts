import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}',
    },
  },
  components: {
    accordion: {
      root: {
        transitionDuration: '300ms',
      },
      content: {
        padding: '0',
      },
      header: {
        padding: '0.85rem 0.25rem',
        hoverBackground: '{gray.50}',
        borderRadius: '0.25rem',
        borderColor: '{gray.50}',
      },
    },
    button: {
      root: {
        paddingX: '0.5rem',
        paddingY: '0.25rem',
        borderRadius: '0.25rem',
        sm: {
          paddingX: '0.5rem',
          paddingY: '0.25rem',
        },
        lg: {
          paddingX: '0.5rem',
          paddingY: '0.25rem',
        },
        primary: {
          background: 'red',
          color: '#fff',
        },
      },
      css: () =>
        `
          p-button, .p-button {
            min-height: 2rem; /* 32px */
          }
        `,
    },
    inputtext: {
      root: {
        borderRadius: '0.25rem',
      },
    },
    rating: {
      icon: {
        size: '1.5rem',
        color: '{gray.300}',
      },
    },
    tooltip: {
      root: {
        padding: '0.5rem',
        borderRadius: '0.25rem',
      },
    },
    tabs: {
      css: `

        .p-tablist-tab-list {
          background: transparent;
          border: none;
        }

        .p-tablist-content {
          padding: 0.2rem;
          background: #eee;
          border-radius: 0.25rem;
        }

        .p-tablist-active-bar {
          top: 0px;
          height: 100%;
          background: rgb(255, 255, 255);
          border-radius: 0.25rem;
          z-index: 0;
        }

        .p-tab {
          padding: 0.25rem 0;
          border: none;
          border-radius: 0.25rem;
          z-index: 1;
        }

        .p-tab-active {
          color: inherit;
        }

        .p-tablist-next-button {
          display: none;
        }
      `,
    },
    popover: {
      content: {
        padding: '0',
      },
      root: {
        borderRadius: '0.25rem',
        gutter: '0.5rem',
      },
      css: `
        .p-popover:before, .p-popover:after {
          display: none
        }
      `,
    },
    selectbutton: {
      root: {
        borderRadius: '0.25rem',
      },
      extend: {
        '--p-togglebutton-content-border-radius': '0.25rem',
      },
      css: `
        .p-selectbutton .p-togglebutton {
          width: 100%
        }

        .p-togglebutton-content {
          --p-togglebutton-content-border-radius: 0.25rem;
        }
      `,
    },
  },
});
