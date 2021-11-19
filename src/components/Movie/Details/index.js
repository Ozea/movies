import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Movie, PlayArrow } from '@mui/icons-material';
import { ReactComponent as ReadMore } from 'assets/read-more.svg';
import GridContainer from 'components/Grid/GridContainer';
import CustomButton from 'components/CustomButton';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'absolute',
    textAlign: 'left',
    left: '120px',
    bottom: '75px',
    width: '35%'
  },
  title: {
    fontWeight: 'bold',
    letterSpacing: '2px',
    marginBottom: theme.spacing(1)
  },
  description: {
    fontStyle: 'italic',
    fontSize: '15px'
  },
  genre: {
    marginRight: theme.spacing(1.5),
    padding: theme.spacing(0, 2),
    borderRadius: '7px',
    background: theme.palette.icon
  },
  genreText: {
    fontSize: '9px',
    lineHeight: '17px',
    fontWeight: 'bolder',
    textTransform: 'uppercase',
  },
  list: {
    padding: '0',
    display: 'flex',
    '& li': {
      padding: theme.spacing(0, 2, 0, 0),
      width: 'max-content',
      '& span': {
        fontWeight: 'bold'
      }
    }
  },
  bullet: {
    width: '8px',
    height: '8px',
    background: '#3a9efd',
    marginRight: '10px',
    borderRadius: '50%',
  },
  button: {
    padding: '3px 15px',
    marginRight: '15px',
    "& > p": {
      fontSize: '12px'
    },
    "& svg": {
      width: '17px'
    }
  }
}));

const MovieDetails = ({ title, description, genres = [] }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography variant="h1" color="textSecondary" className={classes.title}>{title}</Typography>
      <Typography variant="caption" color="textPrimary" className={classes.description}>
        “{description}”
      </Typography>
      <GridContainer>
        <List className={classes.list}>
          <ListItem><div className={classes.bullet}></div><ListItemText primary="2h 35m" /></ListItem>
          <ListItem><div className={classes.bullet}></div><ListItemText primary="2021" /></ListItem>
          <ListItem><div className={classes.bullet}></div><ListItemText primary="8.2 IMDB" /></ListItem>
        </List>
      </GridContainer>
      <GridContainer style={{ marginTop: '.25rem' }}>
        {genres.map(genre => <div className={classes.genre} key={genre}>
          <Typography variant="caption" color="white" className={classes.genreText}>{genre}</Typography>
        </div>)}
      </GridContainer>
      <GridContainer style={{ marginTop: '1rem' }}>
        <CustomButton title="Trailer" icon={Movie} buttonClassName={classes.button} />
        <CustomButton title="Play" icon={PlayArrow} buttonClassName={classes.button} />
        <CustomButton title="About" icon={ReadMore} buttonClassName={classes.button} />
      </GridContainer>
    </div>
  );
}

export default MovieDetails;
