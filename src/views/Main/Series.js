import React, { useEffect, useState } from 'react';
import { Skeleton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// Redux
import { getTrendingTvShows } from 'services/api';
import { GridContainer, GridItem } from 'components';
import { setTrendingSeries } from 'reduxToolkit/slices/series';
import { useDispatch, useSelector } from 'react-redux';
// Components
import MovieDetails from 'components/Movie/Details';
import ShadowedCard from 'components/Movie/ShadowedCard';
// Helmet
import { Helmet } from 'react-helmet';
import Carousel from 'react-material-ui-carousel';
import { formatMovieUrl } from 'utils/movies';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  content: {
    padding: theme.spacing(3),
  },
  cardText: {
    position: 'absolute',
    fontStyle: 'italic',
    '& h3': {
      fontWeight: 'bold',
      letterSpacing: '1px',
      textTransform: 'uppercase'
    }
  },
  catergoryName: {
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  trailerWrapper: {
    height: '75%',
    right: '50%',
    top: '50%',
    transform: 'translate(50%,-50%)',
    position: 'fixed',
    width: '75%',
    zIndex: '9999'
  },
  detailsWrapper: {
    bottom: '2rem',
    left: '4.5rem'
  }
}));

export default function Series() {
  const classes = useStyles();
  const { trendingSeries } = useSelector(state => state.series);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!trendingSeries.length) {
      setLoading(true);

      getTrendingTvShows()
        .then(result => {
          dispatch(setTrendingSeries(result.data.results.slice(0, 20)));
          setLoading(false);
        })
        .catch(err => console.error(err));
    }
  }, [trendingSeries]);

  return (
    <div className={classes.content}>
      <Helmet><title>Movies</title></Helmet>
      {
        loading
          ? (<>
            <GridContainer alignItems="center" justifyContent="center">
              <GridItem style={{ width: '100%' }}>
                <Typography variant="h2" color="textPrimary" className={classes.catergoryName}>Popular now</Typography>
                <GridItem style={{ margin: '1rem 0 0 0', padding: '0' }}><Skeleton height={450} style={{ transform: 'unset' }} /></GridItem>
              </GridItem>
            </GridContainer>
          </>)
          : (
            <GridContainer alignItems="center" justifyContent="center">
              <GridItem style={{ width: '100%' }}>
                <Typography variant="h2" color="textPrimary" className={classes.catergoryName}>Popular now</Typography>
                <Carousel>
                  {trendingSeries.map(serie =>
                    <ShadowedCard imageUrl={formatMovieUrl(serie.backdrop_path)} containerClassname={{ height: '650px', marginTop: '1rem' }} key={serie.id}>
                      <MovieDetails data={serie} type="tv" wrapperClassName={classes.detailsWrapper} />
                    </ShadowedCard>
                  )}
                </Carousel>
              </GridItem>
            </GridContainer>
          )
      }
    </div>
  );
}
