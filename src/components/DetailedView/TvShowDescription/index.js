import React from 'react';
import { IconButton, List, ListItem, ListItemText, Paper, Tooltip, Typography } from '@mui/material';
import { GridItem } from 'components';
import { GridContainer } from 'components';
import CustomButton from 'components/CustomButton';
import dayjs from 'dayjs';
import { useHistory } from 'react-router';
import { formatMovieUrl } from 'utils/movies';
import { ArrowBack, Bookmark, Favorite, Movie } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { tvShowDescriptionStyles } from 'assets/jss/tvShowDescriptionStyles';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavoriteSerie, setFavoriteSerie, removeWatchLaterSerie, setWatchLaterSeries } from 'reduxToolkit/slices/series';

const useStyles = makeStyles(theme => ({
  ...tvShowDescriptionStyles(theme)
}));

export default function TvShowDescription({ tvShow, openTrailer }) {
  const { favorites, watchLater } = useSelector(state => state.series);
  const isFavorite = favorites.find(fav => fav.id === tvShow.id);
  const isWatchLater = watchLater.find(later => later.id === tvShow.id);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const renderProductionCompamnies = () => {
    return tvShow.production_companies.filter(item => item.logo_path).slice(0, 3).map(item =>
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
      {tvShow.credits.cast.slice(0, 5).map(actor => actor.original_name).join(', ')}
    </Typography>;
  }

  const openTrailerHandler = () => {
    openTrailer();
  }

  const favoriteHandler = () => {
    if (isFavorite) {
      return dispatch(removeFavoriteSerie(tvShow.id));
    }

    const { name, release_date, vote_average, poster_path, id } = tvShow;
    dispatch(setFavoriteSerie({ id, name, release_date, vote_average, poster_path }));
  }

  const watchLaterHandler = () => {
    if (isWatchLater) {
      return dispatch(removeWatchLaterSerie(tvShow.id));
    }

    const { name, release_date, vote_average, poster_path, id } = tvShow;
    dispatch(setWatchLaterSeries({ id, name, release_date, vote_average, poster_path }));
  }

  return (
    <Paper className={classes.movieDetails}>
      <GridContainer direction="column" justifyContent="start" alignItems="start">
        <Typography variant="h1" color="textSecondary" className={classes.text} style={{ marginBottom: '.75rem' }}>
          {tvShow.name}
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
        </Typography>
        <Typography variant="h4" color="textSecondary" fontStyle="italic" className={classes.text}>
          {tvShow.tagline ? `"${tvShow.tagline}"` : ''}
        </Typography>
        <Typography variant="caption" color="secondary.dark" className={classes.genres}>
          {tvShow.genres.map((item, i) => item.name).join(', ')}
        </Typography>
        <List className={classes.list}>
          {[dayjs(tvShow.release_date).format("MMMM DD, YYYY"), `${tvShow.vote_average} IMDB`, tvShow.status].map((item, index) => (
            <ListItem key={index}>
              <div className={classes.bullet}></div>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <Typography variant="subtitle1" color="secondary.dark" className={classes.text}><i>{tvShow.overview}</i></Typography>
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
