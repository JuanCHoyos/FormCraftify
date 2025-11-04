import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyPreset = definePreset(Aura, {
  extend: {
    fontSizeBase: '14px',
  },
  semantic: {
    colorScheme: {
      light: {
        semantic: {
          highlight: {
            background: '{primary.50}',
            color: '{primary.700}',
          },
        },
      },
      dark: {
        semantic: {
          highlight: {
            background: '{primary.200}',
            color: '{primary.900}',
          },
        },
      },
    },
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
        borderRadius: '0.25rem',
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
      },
      css: () =>
        `
          p-button, .p-button {
            min-height: 2rem; /* 32px */
          }
        `,
    },
    card: {
      body: {
        padding: '0 1rem 1rem 1rem',
      },
      root: {
        borderRadius: '.5rem',
      },
    },
    inputtext: {
      root: {
        borderRadius: '0.25rem',
      },
    },
    rating: {
      icon: {
        size: '1.5rem',
      },
    },
    tooltip: {
      root: {
        padding: '0.5rem',
        borderRadius: '0.25rem',
      },
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
    select: {
      css: ({ dt }) => `
        .p-select-list {
          font-size: ${dt('fontSizeBase')}
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
