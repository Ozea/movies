import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Skeleton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GridItem } from 'components';
import { GridContainer } from 'components';
import MovieDetails from 'components/Movie/Details';
import ShadowedCard from 'components/Movie/ShadowedCard';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setMoviesByGenre } from 'reduxToolkit/slices/movies';
import { originalImageBaseUrl } from 'services/api';
import { getMoviesByGenre } from 'services/api';

const useStyles = makeStyles(theme => ({
  movieBackground: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    filter: 'blur(10px)'
  },
  listingWrapper: {
    padding: '1rem',
    backgroundColor: theme.palette.secondary.dark,
    width: '85%',
    margin: '-7.5rem 1rem 1rem',
    zIndex: '15',
    boxShadow: theme.palette.shadow,
    borderRadius: '5px 5px 0 0'
  },
  movieDetailsWrapper: {
    position: 'unset'
  },
  mainMovieContainer: {
    position: 'absolute',
    width: '75%',
    height: '75%'
  },
  mainShadow: {
    zIndex: 99,
    borderTop: '1px solid #34415b',
    boxShadow: '0px 1px 20px 4px #202839'
  }
}));

const MoviesByGenre = props => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [imageParallax, setImageParallax] = useState({ blur: 0, axisY: 0 });
  const { moviesByGenre, genres } = useSelector(state => state.movies);
  const dispatch = useDispatch();
  const { id } = useParams();
  const movies = moviesByGenre[id] || [];

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => document.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop < 500) {
      return setImageParallax({ blur: scrollTop / 500 * 12, axisY: scrollTop / 500 * 30 });
    }
  };

  useEffect(() => {
    if (!moviesByGenre[id]) {
      setLoading(true);
      getMoviesByGenre(id)
        .then(res => {
          dispatch(setMoviesByGenre({ genre: id, movies: res.data.results }));
          setLoading(false);
        })
        .catch(err => console.error(err));
    }
  }, [id, moviesByGenre]);

  const genreLookUp = () => {
    if (genres.length) {
      const foundGenreById = genres.find(item => item.id === parseInt(id));

      if (foundGenreById) {
        return foundGenreById.name.toLowerCase();
      } else {
        return id;
      }
    }

    return <Skeleton width={100} />;
  }

  const formatMovieUrl = uri => {
    return `${originalImageBaseUrl}${uri}`;
  }

  const handleOpenTrailer = url => console.log(url);

  return (
    <div className={classes.content}>
      <Helmet><title>Discover by genre</title></Helmet>
      <GridContainer justifyContent="center" alignItems="center">
        {loading || !movies.length
          ? <GridContainer justifyContent="center" alignItems="center">
            <GridItem style={{ width: '100%' }} padding={0}>
              <Skeleton height={600} style={{ transform: 'unset' }} />
            </GridItem>

            <GridContainer direction="column" justifyContent="center" alignItems="center" className={classes.listingWrapper}>
              <List sx={{ width: '100%', maxWidth: '75%' }}>
                {Array.from(Array(10)).map((_, index) => (
                  <ListItem alignItems="flex-start" key={index}>
                    <Skeleton height={35} style={{ transform: 'unset', margin: '.25rem 0', width: '100%' }} />
                  </ListItem>
                ))}
              </List>
            </GridContainer>
          </GridContainer>
          : (<>
            <GridItem style={{ width: '100%' }} padding={0}>
              <ShadowedCard
                imageUrl={formatMovieUrl(movies[0].backdrop_path)}
                imageStyles={{ transform: `scale(1.1) translateY(${imageParallax.axisY}px)`, filter: `blur(${imageParallax.blur}px)` }}
                containerClassname={{ height: '600px', marginTop: '1rem', boxShadow: 'unset' }}>
                <GridContainer className={classes.mainMovieContainer} direction="column" justifyContent="space-evenly">
                  <GridItem>
                    <Typography variant="h1" color="textPrimary" align="left" style={{ fontSize: '50px' }}>
                      {`Top ${genreLookUp()} movies`}
                    </Typography>
                  </GridItem>
                  <GridItem style={{ marginBottom: '2rem' }}>
                    <MovieDetails data={movies[0]} openTrailer={handleOpenTrailer} wrapperClassName={classes.movieDetailsWrapper} />
                  </GridItem>
                </GridContainer>
              </ShadowedCard>
            </GridItem>

            <GridContainer direction="column" justifyContent="center" alignItems="center" className={classes.mainShadow}>
              <GridContainer direction="column" justifyContent="center" alignItems="center" className={classes.listingWrapper}>
                <List sx={{ width: '100%', maxWidth: '90%' }}>
                  {movies.map((item, index) => (
                    <React.Fragment key={index}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Brunch this weekend?"
                          secondary={
                            <>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="textPrimary"
                              >
                                Ali Connors
                              </Typography>
                              {" — I'll be in your neighborhood doing errands this…"}
                            </>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" /></React.Fragment>
                  ))}
                </List>
              </GridContainer>
            </GridContainer>
          </>)
        }
      </GridContainer>
    </div>
  );
}

export default MoviesByGenre;
