import React from 'react';
import { IconButton, List, ListItem, ListItemText, Paper, Tooltip, Typography } from '@mui/material';
import { GridItem } from 'components';
import { GridContainer } from 'components';
import CustomButton from 'components/CustomButton';
import dayjs from 'dayjs';
import { useHistory } from 'react-router';
import { formatMovieUrl } from 'utils/movies';
import { ArrowBack, Bookmark, Favorite, Movie, ConfirmationNumber } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { movieDescriptionStyles } from 'assets/jss/movieDescriptionStyles';
import { useDispatch, useSelector } from 'react-redux';
import {  } from 'reduxToolkit/slices/movies';
import { setWatchLaterMovie, removeWatchLaterMovie, setFavoriteMovie, removeFavoriteMovie } from 'reduxToolkit/slices/movies';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  ...movieDescriptionStyles(theme)
}));

export default function MovieDescription({ movie, openTrailer }) {
  const { favorites, watchLater } = useSelector(state => state.movies);
  const isFavorite = favorites.find(fav => fav.id === movie.id);
  const isWatchLater = watchLater.find(later => later.id === movie.id);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const renderProductionCompamnies = () => {
    return movie.production_companies.filter(item => item.logo_path).slice(0, 3).map(item =>
    (
      <div className={classes.imgWrapper} key={item.id}>
        <img
          className={classes.prodCompLogo}
          alt={item.name}
          src={item.logo_path ? formatMovieUrl(item.logo_path) : ''} />
      </div>));
  }

  const renderCastNames = () => {
    return <Typography variant="h5" color="secondary.dark" marginRight={2} textAlign="left">
      {movie.credits.cast.slice(0, 5).map(actor => actor.original_name).join(', ')}
    </Typography>;
  }

  const humanizeRunTime = () => {
    const hours = Math.floor(movie.runtime / 60);
    const minutes = movie.runtime - hours * 60;
    return `${hours}h ${minutes}min`;
  }

  const openTrailerHandler = () => {
    openTrailer();
  }

  const favoriteHandler = () => {
    if (isFavorite) {
      return dispatch(removeFavoriteMovie(movie.id));
    }

    const { title, release_date, vote_average, poster_path, id } = movie;
    dispatch(setFavoriteMovie({ id, title, release_date, vote_average, poster_path }));
  }

  const watchLaterHandler = () => {
    if (isWatchLater) {
      return dispatch(removeWatchLaterMovie(movie.id));
    }

    const { title, release_date, vote_average, poster_path, id } = movie;
    dispatch(setWatchLaterMovie({ id, title, release_date, vote_average, poster_path }));
  }

  return (
    <Paper className={classes.movieDetails}>
      <GridContainer direction="column" justifyContent="start" alignItems="start">
        <Typography variant="h1" color="textSecondary" className={classes.text}>
          {movie.title}
          <Tooltip title="Add to favorite" placement="top">
            <IconButton sx={{ ml: 1.5 }} color={isFavorite ? "warning" : "primary"} onClick={favoriteHandler}>
              <Favorite />
            </IconButton>
          </Tooltip>
          <Tooltip title="Watch later" placement="top">
            <IconButton sx={{ ml: 1.5 }} color={isWatchLater ? "warning" : "primary"} onClick={watchLaterHandler}>
              <Bookmark />
            </IconButton>
          </Tooltip>
          <Tooltip title="Book a ticket" placement="top">
            <Link to={`/book-ticket/${movie.id}`}>
              <IconButton sx={{ ml: 1.5 }} color="primary">
                <ConfirmationNumber />
              </IconButton>
            </Link>
          </Tooltip>
        </Typography>
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
        <CustomButton title="Trailer" icon={Movie} onClick={openTrailerHandler} buttonClassName={classes.button} text={{ color: 'secondary.dark' }} />
      </GridContainer>
    </Paper>
  );
}
