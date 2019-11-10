import css from '@emotion/css'

export const globalStyles = css({
  '#root': {
    position: 'absolute',
    width: '80%',
    left: '10%',
  },
  hr: {
    marginRight: '10px',
  },

  '@media (max-width: 600px)': {
    '#root': {
      width: '90%',
      left: '5%',
    },
  },
})
