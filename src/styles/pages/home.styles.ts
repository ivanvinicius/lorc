import { styled } from '../theme'

export const Container = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const ListArea = styled('div', {
  position: 'relative',
  overflowX: 'hidden',

  '.buttonController': {
    opacity: 0,
    transition: 'all ease .5s'
  },

  '&:hover .buttonController': {
    opacity: 1
  }
})

export const List = styled('div', {
  display: 'flex',
  gap: '1rem',

  padding: '1rem 3rem',

  transition: 'margin ease 0.5s'
})

export const Left = styled('div', {
  position: 'absolute',
  width: '40px',
  height: '346px',
  left: 0,
  bottom: '1rem',

  zIndex: 9,
  overflow: 'hidden',
  borderRadius: '0 8px 8px 0',

  boxShadow: '$content',
  background: '$brand',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    fontSize: '64px',
    color: '$surface'
  }
})

export const Right = styled('div', {
  position: 'absolute',
  width: '40px',
  height: '346px',
  right: 0,
  bottom: '1rem',
  zIndex: 9,
  overflow: 'hidden',
  borderRadius: '8px 0 0 8px',

  background: '$brand',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '$content',

  svg: {
    fontSize: '64px',
    color: '$surface'
  }
})
