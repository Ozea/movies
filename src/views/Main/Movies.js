import React, { useEffect, useState } from 'react';
import { Backdrop, Fade, Modal, Skeleton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// Redux
import { getTrendingMovies } from 'services/api';
import { GridContainer, GridItem } from 'components';
import { setPopularMovies } from 'reduxToolkit/slices/movies';
import { useDispatch, useSelector } from 'react-redux';
// Images
import Action from 'assets/action.jpg';
import Bond from 'assets/bond.jpg';
import Ethernals from 'assets/ethernals.jpg';
import Venom from 'assets/venom.jpg';
import Finch from 'assets/finch.jpg';
import Halloween from 'assets/halloween_kills.jpg';
// Components
import MovieDetails from 'components/Movie/Details';
import ShadowedCard from 'components/Movie/ShadowedCard';
// Helmet
import { Helmet } from 'react-helmet';
import Carousel from 'react-material-ui-carousel';
import { originalImageBaseUrl } from 'services/api';
import { Link } from 'react-router-dom';

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
  }
}));

export default function Movies() {
  const classes = useStyles();
  const { popularMovies } = useSelector(state => state.movies);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [trailerId, setTrailerId] = useState(null);
  const firstMovieGenres = [
    { id: 35, name: 'Comedy', grid: 3, imgUrl: Action },
    { id: 18, name: 'Drama', grid: 3, imgUrl: Ethernals },
    { id: 28, name: 'Action', grid: 6, imgUrl: Bond }
  ];
  const secondMovieGenres = [
    { id: 878, name: 'Science Fiction', grid: 6, imgUrl: Finch },
    { id: 14, name: 'Fantasy', grid: 3, imgUrl: Venom },
    { id: 27, name: 'Horror', grid: 3, imgUrl: Halloween }
  ];

  useEffect(() => {
    if (!popularMovies.length) {
      setLoading(true);

      getTrendingMovies()
        .then(result => {
          dispatch(setPopularMovies(result.data.results.slice(0, 15)));
          setLoading(false);
        })
        .catch(err => console.error(err));
    }
  }, [popularMovies]);

  const formatMovieUrl = uri => {
    return `${originalImageBaseUrl}${uri}`;
  }

  const handleCloseTrailer = () => {
    setOpen(false);
  }

  const handleOpenTrailer = trrailerId => {
    setTrailerId(trrailerId);
    setOpen(true);
  }

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
            <GridContainer alignItems="center" justifyContent="center">
              <GridItem style={{ width: '100%' }}>
                <Typography variant="h2" color="textPrimary" className={classes.catergoryName}>Popular now</Typography>
                <Carousel>
                  {popularMovies.map(movie =>
                    <ShadowedCard imageUrl={formatMovieUrl(movie.backdrop_path)} containerClassname={{ height: '450px', marginTop: '1rem' }} key={movie.id}>
                      <MovieDetails data={movie} openTrailer={handleOpenTrailer} />
                    </ShadowedCard>
                  )}
                </Carousel>
              </GridItem>

              <GridContainer style={{ marginTop: '1.5rem' }}>
                <GridItem><Typography variant="h2" color="textPrimary" className={classes.catergoryName}>Genres</Typography></GridItem>

                <GridContainer style={{ marginTop: '1.5rem' }}>
                  {firstMovieGenres.map(item => (
                    <GridItem xs={item.grid} key={item.id}>
                      <Link to={`/discover/genre/${item.id}`}>
                        <ShadowedCard imageUrl={item.imgUrl} scaleImageOnHover>
                          <div className={classes.cardText}><Typography variant="h3" color="textPrimary">{item.name}</Typography></div>
                        </ShadowedCard>
                      </Link>
                    </GridItem>
                  ))}
                </GridContainer>

                <GridContainer style={{ marginTop: '1.5rem' }}>
                  {secondMovieGenres.map(item => (
                    <GridItem xs={item.grid} key={item.id}>
                      <Link to={`/discover/genre/${item.id}`}>
                        <ShadowedCard imageUrl={item.imgUrl} scaleImageOnHover>
                          <div className={classes.cardText}><Typography variant="h3" color="textPrimary">{item.name}</Typography></div>
                        </ShadowedCard>
                      </Link>
                    </GridItem>
                  ))}
                </GridContainer>

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
                        src={`https://www.youtube.com/embed/${trailerId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ width: '100%', height: '100%' }}></iframe>
                    </div>
                  </Fade>
                </Modal>
              </GridContainer>
            </GridContainer>
          )
      }
    </div>
  );
}
