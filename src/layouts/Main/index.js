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
import { setMovieGenres } from "reduxToolkit/slices/movies";
import { ArrowUpward } from "@mui/icons-material";
import { getTvGenres } from "services/api";
import { setTvGenres } from "reduxToolkit/slices/series";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    background: theme.palette.secondary.dark
  },
  content: {
    flexGrow: 1,
  },
  scrollTop: {
    position: 'fixed',
    right: '30px',
    bottom: '15px',
    zIndex: 200,
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
      </main>
    </div>
  );
}
