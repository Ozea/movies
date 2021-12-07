import React, { useEffect, useState } from 'react';
import { formatMovieUrl } from 'utils/movies';
import { GridContainer, GridItem } from 'components';
import { Skeleton, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@mui/styles';
import ShadowedCardWithParallax from 'components/Movie/ShadowedCardWithParallax';
import Carousel from 'react-material-ui-carousel';
import { getTvShowById } from 'services/api';
import DetailedViewVideos from 'components/DetailedView/Videos';
import Similar from 'components/DetailedView/Similar';
import Cast from 'components/DetailedView/Cast';
import { convertArrayIntoArrayOfArrays } from 'utils/movies';
import { detailedTvShowStyles } from 'assets/jss/detailedTvShowStyles';
import TvShowDescription from 'components/DetailedView/TvShowDescription';
import Seasons from 'components/DetailedView/Seasons';

const useStyles = makeStyles(theme => ({
  ...detailedTvShowStyles(theme)
}));

const DetailedTvShow = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [tvShow, setTvShow] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getTvShowById(id)
      .then(res => {
        console.log(res.data);
        setTvShow(res.data);
        setLoading(false)
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const renderTvSeasons = () => {
    const seasons = convertArrayIntoArrayOfArrays(tvShow.seasons, 20, 4);
    return seasons.map((bunchOfSeasons, i) => <Seasons data={bunchOfSeasons} key={i} />);
  }

  const renderSimilarMovies = () => {
    const simillarMovies = convertArrayIntoArrayOfArrays(tvShow.similar.results, 20, 4);
    return simillarMovies.map((bunchOfMovies, i) => <Similar data={bunchOfMovies} type="tv" key={i} />)
  }

  const renderCast = () => {
    const originalCastArray = tvShow.credits.cast.filter(item => item.profile_path);
    const cast = convertArrayIntoArrayOfArrays(originalCastArray, originalCastArray.length, 5);
    return cast.map((bunchOfActors, i) => <Cast data={bunchOfActors} key={i} />);
  }

  return (
    <>
      <Helmet><title>TV {tvShow ? `- ${tvShow.name}` : ''}</title></Helmet>
      {
        loading || !tvShow
          ? <GridContainer><Skeleton height={600} style={{ transform: 'unset' }} /></GridContainer>
          : <GridContainer>
            <GridItem padding={0} className={classes.headerImage}>
              <ShadowedCardWithParallax
                imageUrl={formatMovieUrl(tvShow.backdrop_path)}
                axisY={65}
                containerClassname={{ height: 'calc(100vh - 64px)', marginTop: '1rem', boxShadow: 'unset', borderRadius: '0' }}>
                <GridContainer className={classes.mainMovieContainer} justifyContent="space-around" alignItems="center">
                  <GridItem style={{ width: '85%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', position: 'relative' }}>
                    <div className={classes.test}><div /></div>
                    <div className={classes.poster} style={{ backgroundImage: `url(${formatMovieUrl(tvShow.poster_path)})` }}></div>
                    <TvShowDescription tvShow={tvShow} />
                  </GridItem>
                </GridContainer>
              </ShadowedCardWithParallax>
            </GridItem>

            <GridItem padding={0} className={classes.gridItem}>
              <Typography variant="h1" color="textPrimary" className={classes.contentHeading}>Seasons</Typography>
              <Carousel indicatorContainerProps={{ style: { marginTop: '2rem' } }}>
                {renderTvSeasons()}
              </Carousel>
            </GridItem>

            <GridItem padding={0} className={classes.gridItem} justifyContent="center">
              <Typography
                variant="h2"
                color="textPrimary"
                align="left"
                className={classes.contentHeading}
                marginBottom={4}>
                Cast
              </Typography>
              <Carousel indicatorContainerProps={{ style: { marginTop: '2rem' } }}>
                {renderCast()}
              </Carousel>
            </GridItem>

            <GridItem padding={0} className={classes.gridItem}>
              <Typography
                variant="h2"
                color="textPrimary"
                className={classes.contentHeading}
                align="left"
                marginBottom={4}>
                More like this
              </Typography>
              <Carousel indicatorContainerProps={{ style: { marginTop: '25px' } }}>
                {renderSimilarMovies()}
              </Carousel>
            </GridItem>
          </GridContainer>
      }
    </>
  );
}

export default DetailedTvShow;
