import css from '@emotion/css'

export const globalStyles = css({
  '#root': {
    position: 'absolute',
    width: '80%',
    left: '10%',
    marginBottom: '100px',
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
  code: {
    fontFamily: '\'Monaco\', \'Courier New\'',
  },

  blockquote: {
    padding: '0 1em',
    borderLeft: '0.25em solid #dfe2e5',
    p: {
      color: '#6a737d !important',
    }
  },

  section: {
    li: {
      marginTop: '5px',
    },

    'li:last-child': {
      marginBottom: '5px',
    },

    'p, li': {
      color: '#24292e',
      lineHeight: '24px',
    },

    'a, a:link, a:visited': {
      color: '#0366d6',
    },

    'a:focus, a:hover': {
      color: '#03a9f4',
    }
  },

  'li ul': {
    marginLeft: '20px',
  }
})
