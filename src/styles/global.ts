import { globalCss } from './theme'

export const globalStyle = globalCss({
  '*': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box'
  },

  body: {
    color: '$textSecondary',
    background: '$surface',
    overflowX: 'hidden',
    WebkitFontSmoothing: 'antialiased'
  },

  'body::-webkit-scrollbar': {
    width: '0.5rem',
    background: '$surface',
    borderRadius: '$full'
  },

  'body::-webkit-scrollbar-thumb': {
    background: '$brand',
    borderRadius: '$full'
  },

  'body, input, textarea, button': {
    fontFamily: '$nunito',
    fontWeight: '$regular',
    fontSize: '$16'
  },

  'h1, h2, h3, h4, h5, h6, strong': {
    fontWeight: '$bold',
    color: '$textPrimary'
  },

  'h1, h2 ': {
    fontSize: '$32',

    '@tablet': {
      fontSize: '$24'
    }
  },

  'a, button': {
    cursor: 'pointer'
  },

  a: {
    fontSize: '$16',
    fontWeight: '$medium',
    textDecoration: 'none'
  }
})
