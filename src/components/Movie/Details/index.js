import React, { useEffect, useState } from 'react';
import { CircularProgress, List, ListItem, ListItemText, Skeleton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Movie, PlayArrow } from '@mui/icons-material';
import { ReactComponent as ReadMore } from 'assets/read-more.svg';
import GridContainer from 'components/Grid/GridContainer';
import CustomButton from 'components/CustomButton';
import dayjs from 'dayjs';
import { getMovieDetails } from 'services/api';

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
    letterSpacing: '2px',
    marginBottom: theme.spacing(1.5)
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

const MovieDetails = ({ data: { title, overview, genres = [], vote_average, release_date, id }, ...props }) => {
  const [loading, setLoading] = useState(false);
  const [trailerId, setTrailerId] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const description = overview.replace(/.$/, "");
  const classes = useStyles();

  useEffect(() => {
    setLoading(true);
    getMovieDetails(id)
      .then(res => {
        const movieTrailer = res.data.videos.results.find(item => item.site === 'YouTube' && item.type === 'Trailer');
        if (movieTrailer) {
          setTrailerId(movieTrailer.key);
        }
        setMovieDetails(res.data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  const printMovieRunTime = () => {
    if (movieDetails) {
      const hours = Math.floor(movieDetails.runtime / 60);
      const minutes = movieDetails.runtime - hours * 60;
      return `${hours}h ${minutes}m`;
    }

    return '';
  }

  return (
    <div className={classes.wrapper}>
      <Typography variant="h1" color="textSecondary" className={classes.title}>{title}</Typography>
      <Typography variant="caption" color="textPrimary" className={classes.description}>
        “{description.length > 300 ? `${description.substring(0, 300)}...` : description}”
      </Typography>
      <GridContainer>
        <List className={classes.list}>
          {loading ? <Skeleton height={25} style={{ transform: 'unset' }} /> : <ListItem><div className={classes.bullet}></div><ListItemText primary={printMovieRunTime()} /></ListItem>}
          <ListItem><div className={classes.bullet}></div><ListItemText primary={dayjs(release_date).year()} /></ListItem>
          <ListItem><div className={classes.bullet}></div><ListItemText primary={`${vote_average} IMDB`} /></ListItem>
        </List>
      </GridContainer>
      <GridContainer style={{ marginTop: '.25rem' }}>
        {genres.map(genre => <div className={classes.genre} key={genre.id}>
          <Typography variant="caption" color="white" className={classes.genreText}>{genre.name}</Typography>
        </div>)}
      </GridContainer>
      <GridContainer style={{ marginTop: '1rem' }}>
        {loading ? <CircularProgress /> : <CustomButton title="Trailer" icon={Movie} buttonClassName={classes.button} onClick={() => props.openTrailer(trailerId || '')} />}
        <CustomButton title="Play" icon={PlayArrow} buttonClassName={classes.button} />
        <CustomButton title="About" icon={ReadMore} buttonClassName={classes.button} />
      </GridContainer>
    </div>
  );
}

export default MovieDetails;
