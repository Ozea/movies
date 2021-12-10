import React from 'react';
import { GridContainer } from 'components';
import { Typography } from '@mui/material';
import { formatMovieUrl } from 'utils/movies';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
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
    height: '150px',
    marginTop: '10px'
  }
}));

export default function Cast({ data }) {
  const classes = useStyles();

  return (
    <GridContainer justifyContent="center">
      {data.map((actor, i) => (
        <div className={classes.actorPosterWrapper} key={i}>
          <div className={classes.actorPoster} style={{ backgroundImage: `url(${formatMovieUrl(actor.profile_path)})` }} key={i} />
          <Typography variant="h4" color="textSecondary" paddingTop={2}>{actor.name}</Typography>
          <Typography variant="subtitle2" color="white" paddingTop={2}>as {actor.character}</Typography>
        </div>
      ))}
    </GridContainer>
  );
}
