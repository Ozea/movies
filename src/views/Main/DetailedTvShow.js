import React, { useEffect, useState } from 'react';
import { formatMovieUrl } from 'utils/movies';
import { GridContainer, GridItem } from 'components';
import { Backdrop, Fade, Modal, Skeleton, Typography } from '@mui/material';
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
  ...detailedTvShowStyles(theme),
  trailerWrapper: {
    height: '75%',
    right: '50%',
    top: '50%',
    transform: 'translate(50%,-50%)',
    position: 'fixed',
    width: '75%',
    zIndex: '9999'
  }
}));

const DetailedTvShow = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [tvShow, setTvShow] = useState(null);
  const [open, setOpen] = useState(false);
  const [trailer, setTrailer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getTvShowById(id)
      .then(res => {
        if (res.data.videos.results.length) {
          const trailer = res.data.videos.results.filter(item => item.site === 'YouTube' && item.type === "Trailer");
          setTrailer(trailer[0].key);
        }
        setTvShow(res.data);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const renderTvSeasons = () => {
    const seasons = convertArrayIntoArrayOfArrays(tvShow.seasons.filter(item => item.poster_path), 20, 4);
    return seasons.map((bunchOfSeasons, i) => <Seasons data={bunchOfSeasons} key={i} />);
  }

  const renderVideos = () => {
    const videos = convertArrayIntoArrayOfArrays(tvShow.videos.results.filter(item => item.site === 'YouTube'), 20, 2);
    return videos.map((bunchOfMovies, i) => <DetailedViewVideos data={bunchOfMovies} key={i} />);
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

  const opneTrailerHandler = () => {
    setOpen(true);
  }

  const handleCloseTrailer = () => {
    setOpen(false);
  }

  return (
    <>
      <Helmet><title>TV {tvShow ? `- ${tvShow.name}` : ''}</title></Helmet>
      {
        loading || !tvShow
          ? <GridContainer justifyContent="center" alignItems="center">
            <GridItem style={{ width: '100%' }} padding={0}>
              <Skeleton style={{ transform: 'unset', height: '100vh' }} />
            </GridItem>
          </GridContainer>
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
                    <TvShowDescription tvShow={tvShow} openTrailer={opneTrailerHandler} />
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

            {tvShow.videos.results.filter(item => item.site === 'YouTube').length && (
              <GridItem padding={0} className={classes.gridItem}>
                <Typography variant="h1" color="textPrimary" className={classes.contentHeading}>Videos</Typography>
                <Carousel indicatorContainerProps={{ style: { marginTop: '2rem' } }}>
                  {renderVideos()}
                </Carousel>
              </GridItem>
            )}

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

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleCloseTrailer}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{ timeout: 300 }}
            >
              <Fade in={open}>
                <div className={classes.trailerWrapper}>
                  <iframe
                    src={`https://www.youtube.com/embed/${trailer}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: '100%', height: '100%' }}></iframe>
                </div>
              </Fade>
            </Modal>
          </GridContainer>
      }
    </>
  );
}

export default DetailedTvShow;
