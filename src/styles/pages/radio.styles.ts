import { styled } from '../theme'

export const Container = styled('div', {
  background: '#141414',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: '16px'
})

export const Input = styled('input', {
  display: 'none',

  '&:checked + label': {
    fontWeight: '$black'
  }
})

export const Label = styled('label', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  flexDirection: 'column',
  width: '50px',
  height: '70px',

  img: {
    width: '32px',
    height: '32px'
  },

  span: {
    color: '$surface',
    marginTop: '8px'
  }
})
