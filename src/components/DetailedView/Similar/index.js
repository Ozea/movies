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
    overflow: 'hidden',
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

export default function Similar({ data, type = "movie" }) {
  const classes = useStyles();

  return (
    <GridContainer justifyContent="center">
      {data.map((similartvShow, index) => (
        <Link to={`/${type}/${similartvShow.id}`} className={classes.simmilarMovieLink} key={index}>
          <div style={{ backgroundImage: `url(${formatMovieUrl(similartvShow.poster_path)})` }} className={classes.simmilarMoviePoster} />
          <GridContainer direction="column" paddingTop={2} paddingBottom={2} paddingLeft={1}>
            <Typography variant="h4" color="textSecondary" paddingTop={2}>
              {similartvShow[type === "movie" ? 'title' : 'name']}
            </Typography>
            <Typography variant="subtitle1" color="white" paddingTop={2}>
              {dayjs(similartvShow[type === "movie" ? 'release_date' : 'first_air_date']).format("MMMM DD, YYYY")}
            </Typography>
            <Typography variant="subtitle2" color="white" paddingTop={2}>
              <GridContainer>
                <CircularProgress
                  variant="determinate"
                  size={25}
                  style={{ marginRight: '.75rem' }}
                  color={similartvShow.vote_average > 5 ? "success" : "warning"}
                  value={similartvShow.vote_average * 10} />
                {Math.floor(similartvShow.vote_average)} IMDB
              </GridContainer>
            </Typography>
          </GridContainer>
        </Link>
      ))}
    </GridContainer>
  );
}
