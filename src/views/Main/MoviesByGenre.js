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
    width: '75%',
    margin: '-7.5rem 1rem 1rem',
    zIndex: '15',
    boxShadow: theme.palette.shadow,
    borderRadius: '5px 5px 0 0'
  },
  movieDetailsWrapper: {
    position: 'unset'
  }
}));

const MoviesByGenre = props => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { moviesByGenre, genres } = useSelector(state => state.movies);
  const dispatch = useDispatch();
  const { id } = useParams();
  const movies = moviesByGenre[id] || [];

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
              <ShadowedCard imageUrl={formatMovieUrl(movies[0].backdrop_path)} containerClassname={{ height: '600px', marginTop: '1rem', boxShadow: 'unset' }}>
                <GridContainer style={{ position: 'absolute', width: '75%' }} direction="column" justifyContent="start">
                  <GridItem><Typography variant="h1" color="textPrimary" align="left">{`Top ${genreLookUp()} movies`}</Typography></GridItem>
                  <GridItem><MovieDetails data={movies[0]} openTrailer={handleOpenTrailer} wrapperClassName={classes.movieDetailsWrapper} /></GridItem>
                </GridContainer>
              </ShadowedCard>
            </GridItem>

            <GridContainer direction="column" justifyContent="center" alignItems="center" className={classes.listingWrapper}>
              <List sx={{ width: '100%', maxWidth: '75%' }}>
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
          </>)
        }
      </GridContainer>
    </div>
  );
}

export default MoviesByGenre;
