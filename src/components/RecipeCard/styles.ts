import { styled } from '../../styles/theme'

export const Anchor = styled('a', {
  flex: 'none',
  boxShadow: '$content',
  transition: 'box-shadow 0.3s',
  borderRadius: '$8',
  overflow: 'hidden',
  background: '$surface',

  '&:hover': {
    boxShadow: '$input'
  }
})

export const Container = styled('div', {
  width: '210px',
  height: '346px',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  borderRadius: '$8',
  overflow: 'hidden'
})

export const Content = styled('div', {
  padding: '1rem',
  width: '100%'
})

export const RecipeName = styled('strong', {
  width: '100%',
  height: '2.75rem',
  overflow: 'hidden',
  textAlign: 'start',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical'
})

export const Infos = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  marginTop: '0.5rem'
})

export const Row = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '&+div': {
    marginTop: '0.5rem'
  },
  svg: {
    marginLeft: '-0.3rem',
    marginRight: '0.5rem'
  },
  p: {
    fontSize: '$12',
    color: '$textSecondary'
  }
})
