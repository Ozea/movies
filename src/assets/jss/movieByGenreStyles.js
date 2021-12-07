export const moviesByGenreStyles = theme => ({
  movieBackground: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    filter: 'blur(10px)'
  },
  listingWrapper: {
    paddingTop: '1rem',
    backgroundColor: theme.palette.primary.dark,
    width: '70%',
    margin: '-7.5rem 1rem 1rem',
    zIndex: '15',
    boxShadow: theme.palette.shadow,
    borderRadius: '5px 5px 0 0'
  },
  movieDetailsWrapper: {
    position: 'unset',
    width: '75%',
  },
  mainMovieContainer: {
    position: 'absolute',
    width: '65%',
    height: '100%'
  },
  mainShadow: {
    zIndex: 99,
    borderTop: '1px solid #34415b',
    boxShadow: '0px 1px 20px 4px #202839'
  },
  listItem: {
    overflow: 'hidden',
    backgroundColor: '#252E42',
    margin: theme.spacing(1, 0, 2.5),
    padding: '0',
    borderRadius: '10px 0 0 10px',
    boxShadow: '2px 4px 10px 3px #202839'
  },
  poster: {
    height: '300px',
    width: '200px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    transition: '.5s all ease'
  },
  posterWrapper: {
    overflow: 'hidden',
    margin: '0'
  },
  loadMoreButton: {
    padding: theme.spacing(1, 3),
    '& p': {
      fontSize: '16px'
    }
  },
  genre: {
    marginRight: theme.spacing(1.5),
    padding: theme.spacing(.25, 2),
    borderRadius: '7px',
    background: theme.palette.icon,
    textDecoration: 'none',
    marginBottom: '5px'
  },
  genreText: {
    fontSize: '10px',
    lineHeight: '17px',
    fontWeight: 'bolder',
    textDecoration: 'none',
    textTransform: 'uppercase'
  },
  clickableCard: {
    cursor: 'pointer',
    '&:hover $poster': {
      transform: 'scale(1.05)'
    }
  },
  cardActionButton: {
    fontSize: '15px',
    marginRight: theme.spacing(1.5)
  }
});