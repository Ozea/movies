import React, { Suspense, useEffect } from "react";
// Core material
import { CssBaseline, IconButton, LinearProgress, Toolbar } from "@mui/material";
import { makeStyles } from '@mui/styles';
// Components
import { Sidebar, TopBar } from "components";
// Router
import { renderRoutes } from "react-router-config";
import { getMovieGenres } from "services/api";
import { useDispatch, useSelector } from "react-redux";
import { setMovieGenres, initFavoriteMovies } from "reduxToolkit/slices/movies";
import { ArrowUpward } from "@mui/icons-material";
import { getTvGenres } from "services/api";
import { setTvGenres } from "reduxToolkit/slices/series";
import Footer from "components/Footer";
import { getLSValue } from "utils/localStorage";
import { initFavoriteSeries } from "reduxToolkit/slices/series";
import { initWatchLaterMovies } from "reduxToolkit/slices/movies";
import { initWatchLaterSeries } from "reduxToolkit/slices/series";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    background: theme.palette.secondary.dark
  },
  content: {
    flexGrow: 1,
    paddingBottom: '70px'
  },
  scrollTop: {
    position: 'fixed',
    right: '30px',
    bottom: '15px',
    zIndex: 201,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#252E42',
      '& svg': {
        color: 'white'
      }
    }
  }
}));

export default function MainLayout({ route }) {
  const classes = useStyles();
  const { genres } = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedFavoriteMovies = getLSValue("favoriteMovies");
    const savedFavoriteSeries = getLSValue("favoriteSeries");
    const watchLaterMovies = getLSValue("watchLaterMovies");
    const watchLaterSeries = getLSValue("watchLaterSeries");

    if (savedFavoriteMovies) {
      dispatch(initFavoriteMovies(JSON.parse(savedFavoriteMovies)));
    }

    if (savedFavoriteSeries) {
      dispatch(initFavoriteSeries(JSON.parse(savedFavoriteSeries)));
    }
    
    if (watchLaterMovies) {
      dispatch(initWatchLaterMovies(JSON.parse(watchLaterMovies)));
    }
    
    if (watchLaterSeries) {
      dispatch(initWatchLaterSeries(JSON.parse(watchLaterSeries)));
    }
  }, []);

  useEffect(() => {
    if (!Object.values(genres).length) {
      Promise.all([getMovieGenres(), getTvGenres()])
        .then(res => {
          const [movieGenres, tvGenres] = res;
          dispatch(setMovieGenres(movieGenres.data.genres));
          dispatch(setTvGenres(tvGenres.data.genres));
        })
        .catch(err => console.error(err));
    }
  }, [genres]);

  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />

      <Sidebar />

      <main className={classes.content}>
        <Toolbar />
        <Suspense fallback={<LinearProgress />}>
          {renderRoutes(route.routes)}
        </Suspense>
        <IconButton color="primary" aria-label="scroll to top" className={classes.scrollTop} onClick={scrollToTopHandler}>
          <ArrowUpward />
        </IconButton>
        <Footer />
      </main>
    </div>
  );
}
