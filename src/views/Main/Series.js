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
import { Link } from 'react-router-dom';
import { formatMovieUrl } from 'utils/movies';
import { getPopularTvShows } from 'services/api';
import { setPopularSeries } from 'reduxToolkit/slices/series';
import Similar from 'components/DetailedView/Similar';
import { convertArrayIntoArrayOfArrays } from 'utils/movies';
// Images
import HawkEye from 'assets/series/hawkeye.jpg';
import Arcane from 'assets/series/arcane.jpg';
import Simpsons from 'assets/series/simpsons.jpg';
import Mandalorian from 'assets/series/mandalorian.jpg';
import MoneyHeist from 'assets/series/money_heist.jpg';
import Lucifer from 'assets/series/lucifer.jpg';

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
  gridItem: {
    width: '100%',
    padding: theme.spacing(2, 5, 5),
    margin: '0px'
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
  const { trendingSeries, popularSeries } = useSelector(state => state.series);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const firstMovieGenres = [
    { id: 16, name: 'Animation', grid: 3, imgUrl: Arcane },
    { id: 18, name: 'Drama', grid: 3, imgUrl: HawkEye },
    { id: 35, name: 'Comedy', grid: 6, imgUrl: Simpsons }
  ];
  const secondMovieGenres = [
    { id: 37, name: 'Western', grid: 6, imgUrl: Mandalorian },
    { id: 80, name: 'Crime', grid: 3, imgUrl: MoneyHeist },
    { id: 10765, name: 'Sci-Fi & Fantasy', grid: 3, imgUrl: Lucifer }
  ];

  useEffect(() => {
    if (!trendingSeries.length) {
      setLoading(true);

      Promise.all([getTrendingTvShows(), getPopularTvShows()])
        .then(result => {
          const [trendingTvShows, popularTvShows] = result;
          dispatch(setPopularSeries(popularTvShows.data.results.slice(0, 20)));
          dispatch(setTrendingSeries(trendingTvShows.data.results.slice(0, 20)));
          setLoading(false);
        })
        .catch(err => console.error(err));
    }
  }, [trendingSeries]);

  const renderPopularTvShows = () => {
    const popularTvShows = convertArrayIntoArrayOfArrays(popularSeries, 20, 4);
    return popularTvShows.map((bunchOfTvShows, i) => <Similar data={bunchOfTvShows} type="tv" key={i} />)
  }

  return (
    <div className={classes.content}>
      <Helmet><title>Series</title></Helmet>
      {
        loading
          ? (<>
            <GridContainer alignItems="center" justifyContent="center">
              <GridItem style={{ width: '100%' }}>
                <Typography variant="h2" color="textPrimary" className={classes.catergoryName}>Trending</Typography>
                <GridItem style={{ margin: '1rem 0 0 0', padding: '0' }}><Skeleton height={650} style={{ transform: 'unset' }} /></GridItem>
              </GridItem>

              <GridContainer style={{ marginTop: '1.5rem' }}>
                <Typography variant="h2" color="textPrimary" className={classes.catergoryName} style={{ marginBottom: '3rem' }}>Popular now</Typography>

                <GridContainer style={{ marginTop: '1.5rem' }}>
                  <GridItem xs={3}><Skeleton height={250} style={{ transform: 'unset' }} /></GridItem>
                  <GridItem xs={3}><Skeleton height={250} style={{ transform: 'unset' }} /></GridItem>
                  <GridItem xs={3}><Skeleton height={250} style={{ transform: 'unset' }} /></GridItem>
                  <GridItem xs={3}><Skeleton height={250} style={{ transform: 'unset' }} /></GridItem>
                </GridContainer>
              </GridContainer>

              <GridContainer style={{ marginTop: '1.5rem' }}>
                <Typography variant="h2" color="textPrimary" className={classes.catergoryName}>Genres</Typography>

                <GridContainer style={{ marginTop: '1.5rem' }}>
                  <GridItem xs={3}><Skeleton height={250} style={{ transform: 'unset' }} /></GridItem>
                  <GridItem xs={3}><Skeleton height={250} style={{ transform: 'unset' }} /></GridItem>
                  <GridItem xs={6}><Skeleton height={250} style={{ transform: 'unset' }} /></GridItem>
                </GridContainer>

                <GridContainer style={{ marginTop: '1.5rem' }}>
                  <GridItem xs={6}><Skeleton height={250} style={{ transform: 'unset' }} /></GridItem>
                  <GridItem xs={3}><Skeleton height={250} style={{ transform: 'unset' }} /></GridItem>
                  <GridItem xs={3}><Skeleton height={250} style={{ transform: 'unset' }} /></GridItem>
                </GridContainer>
              </GridContainer>
            </GridContainer>
          </>)
          : (
            <>
              <GridContainer alignItems="center" justifyContent="center">
                <GridItem style={{ width: '100%' }}>
                  <Typography variant="h2" color="textPrimary" className={classes.catergoryName}>Trending</Typography>
                  <Carousel>
                    {trendingSeries.map(serie =>
                      <ShadowedCard imageUrl={formatMovieUrl(serie.backdrop_path)} containerClassname={{ height: '650px', marginTop: '1rem' }} key={serie.id}>
                        <MovieDetails data={serie} type="tv" wrapperClassName={classes.detailsWrapper} />
                      </ShadowedCard>
                    )}
                  </Carousel>
                </GridItem>
              </GridContainer>

              <GridContainer marginTop={5}>
                <GridItem padding={0} className={classes.gridItem}>
                  <Typography variant="h2" color="textPrimary" className={classes.catergoryName} style={{ marginBottom: '3rem' }}>
                    Popular now
                  </Typography>
                  <Carousel indicatorContainerProps={{ style: { marginTop: '25px' } }}>
                    {renderPopularTvShows()}
                  </Carousel>
                </GridItem>
              </GridContainer>

              <GridContainer style={{ marginTop: '1.5rem' }}>
                <GridItem><Typography variant="h2" color="textPrimary" className={classes.catergoryName}>Genres</Typography></GridItem>

                <GridContainer style={{ marginTop: '1.5rem' }}>
                  {firstMovieGenres.map(item => (
                    <GridItem xs={item.grid} key={item.id}>
                      <Link to={`/tv/discover/genre/${item.id}`}>
                        <ShadowedCard imageUrl={item.imgUrl} scaleImageOnHover containerClassname={{ height: '300px' }}>
                          <div className={classes.cardText}><Typography variant="h3" color="textPrimary">{item.name}</Typography></div>
                        </ShadowedCard>
                      </Link>
                    </GridItem>
                  ))}
                </GridContainer>

                <GridContainer style={{ marginTop: '1.5rem' }}>
                  {secondMovieGenres.map(item => (
                    <GridItem xs={item.grid} key={item.id}>
                      <Link to={`/tv/discover/genre/${item.id}`}>
                        <ShadowedCard imageUrl={item.imgUrl} scaleImageOnHover containerClassname={{ height: '300px' }}>
                          <div className={classes.cardText}><Typography variant="h3" color="textPrimary">{item.name}</Typography></div>
                        </ShadowedCard>
                      </Link>
                    </GridItem>
                  ))}
                </GridContainer>
              </GridContainer>
            </>
          )
      }
    </div>
  );
}
