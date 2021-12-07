export const detailedMovieStyles = theme => ({
  headerImage: {
    width: '100%',
  },
  gridItem: {
    width: '100%',
    padding: theme.spacing(0, 5, 5),
    margin: '0px',
    borderBottom: '1px solid gray'
  },
  movieDetailsWrapper: {
    position: 'unset',
    width: '75%',
  },
  mainMovieContainer: {
    position: 'absolute',
    width: '100%',
    height: '75%'
  },
  poster: {
    height: '100%',
    zIndex: '1',
    borderRadius: '10px',
    width: '450px',
    backgroundSize: 'cover',
    boxShadow: theme.palette.shadow
  },
  contentHeading: {
    borderLeft: '1px solid orange',
    margin: '2rem 0 3rem',
    padding: '.75rem'
  },
  similarMoviePoster: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '250px',
    height: '250px'
  },
  test: {
    position: 'absolute',
    left: '0px',
    top: '0px',
    height: '100%',
    width: '35px',
    display: 'flex',
    transform: 'translateX(-10px)',
    justifyContent: 'center',
    alignItems: 'center',
    "& > div": {
      height: '75%',
      width: '100%',
      borderRadius: '3px 0 0 3px',
      background: 'white'
    }
  }
});