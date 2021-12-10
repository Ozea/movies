import React from 'react';
import { List, ListItem, ListItemText, Skeleton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { PlayArrow } from '@mui/icons-material';
import { ReactComponent as ReadMore } from 'assets/read-more.svg';
import GridContainer from 'components/Grid/GridContainer';
import dayjs from 'dayjs';
import { Link, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import CustomLink from 'components/CustomLink';

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
    lineHeight: '32px',
    letterSpacing: '2px'
  },
  description: {
    fontStyle: 'italic',
    fontSize: '15px'
  },
  genre: {
    marginRight: theme.spacing(1.5),
    padding: theme.spacing(0, 2),
    borderRadius: '7px',
    background: theme.palette.icon,
    textDecoration: 'none',
    marginBottom: '5px'
  },
  genreText: {
    fontSize: '9px',
    lineHeight: '17px',
    fontWeight: 'bolder',
    color: theme.palette.primary.dark,
    textTransform: 'uppercase'
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
    background: theme.palette.orange,
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

const MovieDetails = ({ data: { title, overview, genre_ids: movieGenres = [], vote_average, release_date, name, ...movie }, type = "movie", ...props }) => {
  const { genres: globalMovieGenres } = useSelector(state => state.movies);
  const { genres: globalTvGenres } = useSelector(state => state.series);
  const history = useHistory();
  const classes = useStyles();

  const lookupGenres = () => {
    let genresArray = type === "movie" ? globalMovieGenres || [] : globalTvGenres || [];

    if (Object.values(genresArray).length) {
      return movieGenres.map(genre => {
        let currentGenre = genresArray[genre];

        if (currentGenre) {
          return (<Link className={classes.genre} key={currentGenre.id} to={`/${type}/discover/genre/${currentGenre.id}`}>
            <Typography variant="caption" color="white" className={classes.genreText}>{currentGenre.name}</Typography>
          </Link>);
        }
      });
    } else {
      return Array.from(Array(movieGenres.length)).map((_, index) => <Skeleton width={50} height={30} key={index} />);
    }
  }

  return (
    <div className={classNames(classes.wrapper, props.wrapperClassName)}>
      <Typography variant="h1" color="textSecondary" className={classes.title}>{title || name}</Typography>
      <GridContainer>
        <List className={classes.list}>
          <ListItem><div className={classes.bullet}></div><ListItemText primary={dayjs(release_date).year()} /></ListItem>
          <ListItem><div className={classes.bullet}></div><ListItemText primary={`${vote_average} IMDB`} /></ListItem>
        </List>
      </GridContainer>
      <GridContainer style={{ marginTop: '.25rem' }}>
        {lookupGenres()}
      </GridContainer>
      <GridContainer style={{ marginTop: '1rem' }}>
        <CustomLink title="Play" icon={PlayArrow} buttonClassName={classes.button} to={`/${type}/${movie.id}`} />
        <CustomLink title="About" icon={ReadMore} buttonClassName={classes.button} to={`/${type}/${movie.id}`} />
      </GridContainer>
    </div>
  );
}

export default MovieDetails;
