import { Rating, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GridContainer } from 'components';
import Ribbon from 'components/Ribbon';
import dayjs from 'dayjs';
import React from 'react';
import { Link } from 'react-router-dom';
import { formatMovieUrl } from 'utils/movies';

const useStyles = makeStyles(theme => ({
  simmilarLink: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto 1.75rem',
    position: 'relative',
    width: '250px',
    height: '100%',
    textDecoration: 'none'
  },
  posterWrapper: {
    position: 'relative',
    overflow: 'hidden',
    "& > $simmilarPoster": {
      transition: theme.palette.transition
    },
    "&:hover > $simmilarPoster": {
      transform: 'scale(1.05)'
    }
  },
  simmilarPoster: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '250px',
    height: '400px'
  }
}));

export default function PopularItemCard({ data, type = "movie", isFavorite, isWatchLater }) {
  const classes = useStyles();

  return (
    <Link to={`/${type === "movie" ? "movie" : "tv"}/${data.id}`} className={classes.simmilarLink} key={data.id}>
      {isFavorite && <Ribbon>Favorite</Ribbon>}
      <div className={classes.posterWrapper}>
        <div
          style={{ backgroundImage: `url(${formatMovieUrl(data.poster_path)})` }}
          className={classes.simmilarPoster} />
      </div>
      <GridContainer direction="column" paddingTop={2} paddingBottom={2} paddingLeft={1}>
        <Typography variant="h4" color="textSecondary" paddingTop={2}>{data[type === "movie" ? 'title' : 'name']}</Typography>
        <Typography variant="subtitle1" color="white" paddingTop={2} sx={{ pt: .5 }}>
          {dayjs(data[type === "movie" ? 'release_date' : 'first_air_date']).format("MMMM DD, YYYY")}
        </Typography>
        <Typography variant="subtitle2" color="white" paddingTop={2} sx={{ pt: .5 }}>
          <Rating name="read-only" value={Math.floor(data.vote_average) / 2 || 1} readOnly />
        </Typography>
      </GridContainer>
    </Link>
  );
}
