import React, { useEffect, useState } from 'react';
import { getMovieDetails } from 'services/api';
import { formatMovieUrl } from 'utils/movies';
import { GridContainer } from 'components';
import { CircularProgress, List, ListItem, ListItemText, Paper, Skeleton, Typography } from '@mui/material';
import { useHistory, useParams } from 'react-router';
import { GridItem } from 'components';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@mui/styles';
import ShadowedCardWithParallax from 'components/Movie/ShadowedCardWithParallax';
import dayjs from 'dayjs';
import CustomButton from 'components/CustomButton';
import { ArrowBack, Movie, PlayArrow } from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
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
  prodCompLogo: {
    width: '100%',
    height: '100%',
    marginRight: theme.spacing(4)
  },
  prodCompaniesWrapper: {
    display: 'flex',
    marginTop: '15px',
    width: '40%',
    alignItems: 'center'
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
  },
  contentHeading: {
    borderLeft: '1px solid orange',
    margin: '2rem 0 3rem',
    padding: '.75rem'
  },
  actorPosterWrapper: {
    margin: '0 2rem',
    display: 'flex',
    flexDirection: 'column',
    width: '150px',
    cursor: 'pointer',
    "&:hover > div:nth-of-type(1)": {
      transform: 'scale(1.03)'
    }
  },
  actorPoster: {
    boxShadow: '2px 2px 15px -5px #a9d4ff',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '50%',
    width: '150px',
    height: '150px'
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
  },
  simmilarMovieLink: {
    width: '250px',
    height: '100%',
    marginRight: '3rem',
    textDecoration: 'none',
    overflow: 'hiddden',
    "& > div:nth-of-type(1)": {
      transition: theme.palette.transition
    },
    "&:hover > div:nth-of-type(1)": {
      transform: 'scale(1.05)'
    }
  },
  simmilarMoviePoster: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '250px',
    height: '400px'
  }
}));

const DetailedMovie = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getMovieDetails(id)
      .then(res => {
        setMovie(res.data);
        setLoading(false)
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const humanizeRunTime = () => {
    const hours = Math.floor(movie.runtime / 60);
    const minutes = movie.runtime - hours * 60;
    return `${hours}h ${minutes}min`;
  }

  const convertArrayIntoArrayOfArrays = (data, dataLimit = 18, subArrayLength = 3) => {
    let result = [];
    data.slice(0, dataLimit).forEach((item, index, array) => {
      if (index % subArrayLength === 0 || index === 0) {
        const newArray = array.slice(index, index + subArrayLength);
        if (newArray.length) {
          result.push(newArray);
        }
      }
    });
    return result;
  }

  const renderProductionCompamnies = () => {
    return movie.production_companies.filter(item => item.logo_path).slice(0, 3).map(item =>
    (<img
      key={item.id}
      className={classes.prodCompLogo}
      alt={item.name}
      src={item.logo_path ? formatMovieUrl(item.logo_path) : ''} />));
  }

  const renderCastNames = () => {
    return <Typography variant="h5" color="secondary.dark" marginRight={2} textAlign="left">
      {movie.credits.cast.slice(0, 5).map(actor => actor.original_name).join(', ')}
    </Typography>;
  }

  const renderMovieVideos = () => {
    const videos = convertArrayIntoArrayOfArrays(movie.videos.results.filter(item => item.site === 'YouTube'), 20, 2);
    return videos.map((bunchOfMovies, i) => (
      <GridContainer key={i} justifyContent="center">
        <GridContainer justifyContent="center" alignItems="center">
          {bunchOfMovies.map((video, index) => (
            <GridItem key={video.key} marginRight={2}>
              <iframe
                width="500"
                height="300"
                src={`https://www.youtube.com/embed/${video.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
            </GridItem>
          ))}
        </GridContainer>
      </GridContainer>
    ));
  }

  const renderMovieImages = () => {
    const images = convertArrayIntoArrayOfArrays(movie.images.backdrops, 20, 2);
    return images.map((bunchOfImages, i) => (
      <GridContainer key={i} justifyContent="center">
        <GridContainer justifyContent="center" alignItems="center">
          {bunchOfImages.map((image, index) => (
            <GridItem key={index} marginRight={2}>
              <div style={{
                backgroundImage: `url(${formatMovieUrl(image.file_path)})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '300px',
                width: '500px'
              }} key={i} />
            </GridItem>
          ))}
        </GridContainer>
      </GridContainer>
    ));
  }

  const renderSimilarMovies = () => {
    const simillarMovies = convertArrayIntoArrayOfArrays(movie.similar.results, 20, 4);
    return simillarMovies.map((bunchOfMovies, i) => (
      <GridContainer key={i} justifyContent="center">
        {bunchOfMovies.map((similarMovie, index) => (
          <Link to={`/movie/${similarMovie.id}`} className={classes.simmilarMovieLink} key={index}>
            <div style={{ backgroundImage: `url(${formatMovieUrl(similarMovie.poster_path)})` }} className={classes.simmilarMoviePoster} />
            <GridContainer direction="column" paddingTop={2} paddingBottom={2} paddingLeft={1}>
              <Typography variant="h4" color="textSecondary" paddingTop={2}>{similarMovie.original_title}</Typography>
              <Typography variant="subtitle1" color="white" paddingTop={2}>{dayjs(movie.release_date).format("MMMM DD, YYYY")}</Typography>
              <Typography variant="subtitle2" color="white" paddingTop={2}>
                <GridContainer>
                  <CircularProgress
                    variant="determinate"
                    size={25}
                    style={{ marginRight: '.75rem' }}
                    color={similarMovie.vote_average > 5 ? "success" : "warning"}
                    value={similarMovie.vote_average * 10} />
                  {Math.floor(similarMovie.vote_average)} IMDB
                </GridContainer>
              </Typography>
            </GridContainer>
          </Link>
        ))}
      </GridContainer>
    ))
  }

  const renderCast = () => {
    const originalCastArray = movie.credits.cast.filter(item => item.profile_path);
    const cast = convertArrayIntoArrayOfArrays(originalCastArray, originalCastArray.length, 5);
    return cast.map((bunchOfActors, i) => (
      <GridContainer key={i} justifyContent="center">
        {bunchOfActors.map((actor, i) => (
          <div className={classes.actorPosterWrapper} key={i}>
            <div className={classes.actorPoster} style={{ backgroundImage: `url(${formatMovieUrl(actor.profile_path)})` }} key={i} />
            <Typography variant="h4" color="textSecondary" paddingTop={2}>{actor.name}</Typography>
            <Typography variant="subtitle2" color="white" paddingTop={2}>as {actor.character}</Typography>
          </div>
        ))}
      </GridContainer>
    ))
  }

  return (
    <>
      <Helmet><title>Movie {movie ? `- ${movie.title}` : ''}</title></Helmet>
      {
        loading || !movie
          ? <GridContainer><Skeleton height={600} style={{ transform: 'unset' }} /></GridContainer>
          : <GridContainer>
            <GridItem padding={0} className={classes.headerImage}>
              <ShadowedCardWithParallax
                imageUrl={formatMovieUrl(movie.backdrop_path)}
                axisY={65}
                containerClassname={{ height: 'calc(100vh - 64px)', marginTop: '1rem', boxShadow: 'unset', borderRadius: '0' }}>
                <GridContainer className={classes.mainMovieContainer} justifyContent="space-around" alignItems="center">
                  <GridItem style={{ width: '85%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', position: 'relative' }}>
                    <div className={classes.test}><div /></div>
                    <div className={classes.poster} style={{ backgroundImage: `url(${formatMovieUrl(movie.poster_path)})` }}></div>
                    <Paper className={classes.movieDetails}>
                      <GridContainer direction="column" justifyContent="start" alignItems="start">
                        <Typography variant="h1" color="textSecondary" className={classes.text}>{movie.title}</Typography>
                        <Typography variant="caption" color="secondary.dark" className={classes.genres}>
                          {movie.genres.map((item, i) => item.name).join(', ')}
                        </Typography>
                        <List className={classes.list}>
                          {[dayjs(movie.release_date).format("MMMM DD, YYYY"), humanizeRunTime(), `${movie.vote_average} IMDB`].map((item, index) => (
                            <ListItem key={index}>
                              <div className={classes.bullet}></div>
                              <ListItemText primary={item} />
                            </ListItem>
                          ))}
                        </List>
                        <Typography variant="subtitle1" color="secondary.dark" className={classes.text}><i>"{movie.overview}"</i></Typography>
                        <Typography variant="subtitle2" color="secondary.dark" className={classes.text}>
                          <b>Budget:</b> &nbsp; ${movie.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          &nbsp; &nbsp; <b>Revenue:</b> &nbsp; ${movie.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </Typography>
                        <GridContainer flexWrap="wrap">
                          <GridItem padding={0}><Typography variant="h4" color="secondary.dark" className={classes.text}><b>Cast</b></Typography></GridItem>
                          <GridContainer>{renderCastNames()}</GridContainer>
                        </GridContainer>
                        <GridContainer direction="column" justifyContent="flex-start" alignItems="start" marginTop={3}>
                          <GridItem padding={0}><Typography variant="h4" color="secondary.dark" className={classes.text}><b>Produced by</b></Typography></GridItem>
                          <GridItem padding={0} className={classes.prodCompaniesWrapper}>{renderProductionCompamnies()}</GridItem>
                        </GridContainer>
                      </GridContainer>
                      <GridContainer marginTop={4}>
                        <CustomButton onClick={() => history.goBack()} title="Back" icon={ArrowBack} buttonClassName={classes.button} text={{ color: 'secondary.dark' }} />
                        <CustomButton title="Play" icon={PlayArrow} buttonClassName={classes.button} text={{ color: 'secondary.dark' }} />
                        <CustomButton title="Trailer" icon={Movie} buttonClassName={classes.button} text={{ color: 'secondary.dark' }} />
                      </GridContainer>
                    </Paper>
                  </GridItem>
                </GridContainer>
              </ShadowedCardWithParallax>
            </GridItem>

            <GridItem padding={0} className={classes.gridItem}>
              <Typography variant="h1" color="textPrimary" className={classes.contentHeading}>Videos</Typography>
              <Carousel indicatorContainerProps={{ style: { marginTop: '2rem' } }}>
                {renderMovieVideos()}
              </Carousel>
            </GridItem>

            <GridItem padding={0} className={classes.gridItem}>
              <Typography variant="h1" color="textPrimary" className={classes.contentHeading}>Images</Typography>
              <Carousel indicatorContainerProps={{ style: { marginTop: '2rem' } }}>
                {renderMovieImages()}
              </Carousel>
            </GridItem>

            <GridItem padding={0} className={classes.gridItem} justifyContent="center">
              <Typography
                variant="h2"
                color="textPrimary"
                align="left"
                className={classes.contentHeading}
                marginBottom={4}>
                Cast
              </Typography>
              <Carousel indicatorContainerProps={{ style: { marginTop: '2rem' } }}>
                {renderCast()}
              </Carousel>
            </GridItem>

            <GridItem padding={0} className={classes.gridItem}>
              <Typography
                variant="h2"
                color="textPrimary"
                className={classes.contentHeading}
                align="left"
                marginBottom={4}>
                More like this
              </Typography>
              <Carousel indicatorContainerProps={{ style: { marginTop: '25px' } }}>
                {renderSimilarMovies()}
              </Carousel>
            </GridItem>
          </GridContainer>
      }
    </>
  );
}

export default DetailedMovie;
