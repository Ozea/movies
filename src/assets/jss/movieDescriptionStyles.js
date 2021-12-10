export const movieDescriptionStyles = theme => ({
  movieDetails: {
    height: '75%',
    zIndex: '0',
    width: '65%',
    padding: theme.spacing(4, 4, 4, 7),
    transform: 'translateX(-1.5rem)',
    boxShadow: theme.palette.shadow,
    overflowY: 'scroll'
  },
  text: {
    textAlign: 'left',
    marginBottom: '1.25rem'
  },
  list: {
    padding: '0',
    marginBottom: theme.spacing(2),
    display: 'flex',
    '& li': {
      padding: theme.spacing(0, 2, 0, 0),
      width: 'max-content',
      '& span': {
        color: theme.palette.secondary.dark,
        fontWeight: 'bolder'
      }
    }
  },
  bullet: {
    width: '8px',
    height: '8px',
    background: theme.palette.orange,
    marginRight: '10px',
    borderRadius: '50%',
  },
  genres: {
    marginBottom: theme.spacing(2),
    fontSize: '13px'
  },
  prodCompaniesWrapper: {
    display: 'flex',
    marginTop: '15px',
    alignItems: 'center'
  },
  imgWrapper: {
    width: '100px',
    height: 'auto',
    marginRight: theme.spacing(2)
  },
  prodCompLogo: {
    width: '100%',
    height: '100%',
    marginRight: theme.spacing(4)
  },
  button: {
    border: `1px solid ${theme.palette.primary.dark}`,
    marginRight: theme.spacing(1.5),
    '& svg': {
      fill: theme.palette.primary.dark
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      '& p': {
        color: theme.palette.white
      },
      '& span svg, & span svg path': {
        fill: `${theme.palette.white} !important`
      },
    }
  }
});