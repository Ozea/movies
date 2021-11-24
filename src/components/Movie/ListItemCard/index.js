import React from 'react';
import { Movie, PlayArrow } from '@mui/icons-material';
import { CircularProgress, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GridItem } from 'components';
import { GridContainer } from 'components';
import CustomButton from 'components/CustomButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { originalImageBaseUrl } from 'services/api';
import dayjs from 'dayjs';

const useStyles = makeStyles(theme => ({
  poster: {
    height: '300px',
    width: '200px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    transition: '.5s all ease'
  },
  posterWrapper: {
    overflow: 'hidden',
    margin: '0'
  },
  genre: {
    marginRight: theme.spacing(1.5),
    padding: theme.spacing(.25, 2),
    borderRadius: '7px',
    background: theme.palette.icon,
    textDecoration: 'none',
    marginBottom: '5px'
  },
  genreText: {
    fontSize: '10px',
    lineHeight: '17px',
    fontWeight: 'bolder',
    textDecoration: 'none',
    color: theme.palette.primary.dark,
    textTransform: 'uppercase'
  },
  listItem: {
    overflow: 'hidden',
    width: '100%',
    // backgroundColor: '#252E42',
    backgroundColor: theme.palette.primary.dark,
    margin: theme.spacing(1, 0, 2.5),
    padding: '0',
    borderRadius: '10px 0 0 10px',
    boxShadow: `2px 4px 10px 1px ${theme.palette.primary.dark}`
  },
  clickableCard: {
    margin: 'auto',
    cursor: 'pointer',
    '&:hover $poster': {
      transform: 'scale(1.05)'
    },
    '&:hover $movieDescription': {
      display: 'flex'
    },
  },
  cardActionButton: {
    fontSize: '15px',
    marginRight: theme.spacing(1.5)
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
  movieDescription: {
    width: '65%'
  }
}));

const ListIemCard = ({ data }) => {
  const classes = useStyles();
  const { genres } = useSelector(state => state.movies);
  const history = useHistory();

  const formatMovieUrl = uri => {
    return `${originalImageBaseUrl}${uri}`;
  }

  return (
    <div onClick={() => history.push(`/movie/details/${data.id}`)} className={classes.clickableCard}>
      <ListItem alignItems="flex-start" className={classes.listItem}>
        <GridContainer flexWrap="unset">
          <ListItemAvatar className={classes.posterWrapper}>
            <div className={classes.poster} style={{ backgroundImage: `url(${formatMovieUrl(data.poster_path)})` }}></div>
          </ListItemAvatar>
          <GridContainer direction="column" className={classes.movieDescription}>
            <GridContainer direction="column" margin={2}>
              <GridItem><Typography variant="h2" color="textSecondary" letterSpacing={1} lineHeight='25px' paddingBottom={2}>{data.title}</Typography></GridItem>
              <GridItem marginBottom={2}>
                <Typography variant="subtitle" paddingBottom={2} fontSize={15}>
                  <i>“{data.overview.length > 250 ? `${data.overview.substring(0, 250)}...` : data.overview}”</i>
                </Typography>
              </GridItem>
              <GridItem flexWrap="wrap">
                {Object.values(genres).length && data.genre_ids.slice(0, 5).map(genreId => {
                  const genre = genres[genreId];
                  return (<Link className={classes.genre} key={genre.id} to={`/discover/genre/${genre.id}`}>
                    <Typography variant="caption" color="white" className={classes.genreText}>{genre.name}</Typography>
                  </Link>)
                })}
              </GridItem>
              <GridItem marginTop={2}>
                <List className={classes.list}>
                  <ListItem>
                    <CircularProgress
                      variant="determinate"
                      size={25}
                      color={data.vote_average > 5 ? "success" : "warning"}
                      value={data.vote_average * 10} />
                    <ListItemText primary={`${data.vote_average} IMDB`} style={{ marginLeft: '.5rem' }} />
                  </ListItem>
                  <ListItem><div className={classes.bullet}></div><ListItemText primary={dayjs(data.release_date).year()} /></ListItem>
                </List>
              </GridItem>
            </GridContainer>

            <GridContainer direction="column" margin={2}>
              <GridItem marginBottom={2}>
                <CustomButton title="Watch" icon={PlayArrow} buttonClassName={classes.cardActionButton} />
                <CustomButton title="Trailer" icon={Movie} buttonClassName={classes.cardActionButton} />
              </GridItem>
            </GridContainer>
          </GridContainer>
        </GridContainer>
      </ListItem>
    </div>
  );
}

export default ListIemCard;
