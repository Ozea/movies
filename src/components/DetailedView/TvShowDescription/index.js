import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { GridItem } from 'components';
import { GridContainer } from 'components';
import CustomButton from 'components/CustomButton';
import dayjs from 'dayjs';
import { useHistory } from 'react-router';
import { formatMovieUrl } from 'utils/movies';
import { ArrowBack, Movie, PlayArrow } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { tvShowDescriptionStyles } from 'assets/jss/tvShowDescriptionStyles';

const useStyles = makeStyles(theme => ({
  ...tvShowDescriptionStyles(theme)
}));

export default function TvShowDescription({ tvShow }) {
  const classes = useStyles();
  const history = useHistory();

  const renderProductionCompamnies = () => {
    return tvShow.production_companies.filter(item => item.logo_path).slice(0, 3).map(item =>
    (<img
      key={item.id}
      className={classes.prodCompLogo}
      alt={item.name}
      src={item.logo_path ? formatMovieUrl(item.logo_path) : ''} />));
  }

  const renderCastNames = () => {
    return <Typography variant="h5" color="secondary.dark" marginRight={2} textAlign="left">
      {tvShow.credits.cast.slice(0, 5).map(actor => actor.original_name).join(', ')}
    </Typography>;
  }

  return (
    <Paper className={classes.movieDetails}>
      <GridContainer direction="column" justifyContent="start" alignItems="start">
        <Typography variant="h1" color="textSecondary" className={classes.text} style={{ marginBottom: '.75rem' }}>{tvShow.name}</Typography>
        <Typography variant="h4" color="textSecondary" fontStyle="italic" className={classes.text}>"{tvShow.tagline}"</Typography>
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
        <Typography variant="subtitle1" color="secondary.dark" className={classes.text}><i>"{tvShow.overview}"</i></Typography>
        <Typography variant="subtitle2" color="secondary.dark" className={classes.text}>
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
  );
}