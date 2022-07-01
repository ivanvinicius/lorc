import { createStitches } from '@stitches/react'

export const { getCssText, styled, globalCss } = createStitches({
  media: {
    mobile: '(max-width: 480px)',
    tablet: '(max-width: 768px)',
    '720p': '(max-width: 1336px)',
    '1080p': '(max-width: 1920px)',
    '2560p': '(max-width: 2560px)'
  },

  theme: {
    fonts: {
      dancing: 'Dancing Script, cursive',
      nunito: 'Nunito, sans-serif'
    },

    fontSizes: {
      12: '0.75rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem'
    },

    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700'
    },

    colors: {
      brand: 'linear-gradient(to right, #F89E1B, #FFCF02)',
      action: '#F12711',
      actionPrimary: '#D1220F',
      textPrimary: '#191510',
      textSecondary: '#939190',
      stroke: '#C1C0BF',
      scrollbar: '#F7F7F7',
      surface: '#FFFFFF',
      sun: '#FFCF02'
    },

    radii: {
      8: '8px',
      full: '99999px'
    },

    shadows: {
      content: '0px 5px 10px 0px rgba(0, 0, 0, 0.1)',
      input: '0px 0px 8px 0px rgba(0, 0, 0, 0.08)'
    }
  }
})
