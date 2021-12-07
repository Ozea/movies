import { CircularProgress, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GridContainer } from 'components';
import dayjs from 'dayjs';
import React from 'react';
import { Link } from 'react-router-dom';
import { formatMovieUrl } from 'utils/movies';

const useStyles = makeStyles(theme => ({
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

export default function Seasons({ data, type = "movie" }) {
  const classes = useStyles();

  return (
    <GridContainer justifyContent="center">
      {data.map((season, index) => (
        <Link to={`/${type}/${season.id}`} className={classes.simmilarMovieLink} key={index}>
          <div style={{ backgroundImage: `url(${formatMovieUrl(season.poster_path)})` }} className={classes.simmilarMoviePoster} />
          <GridContainer direction="column" paddingTop={2} paddingBottom={2} paddingLeft={1}>
            <Typography variant="h4" color="textSecondary" paddingTop={2}>{season.name}</Typography>
          </GridContainer>
        </Link>
      ))}
    </GridContainer>
  );
}
