import React, { Suspense, useEffect } from "react";
// Core material
import { CssBaseline, LinearProgress, Toolbar } from "@mui/material";
import { makeStyles } from '@mui/styles';
// Components
import { Sidebar, TopBar } from "components";
// Router
import { renderRoutes } from "react-router-config";
import { getMovieGenres } from "services/api";
import { useDispatch, useSelector } from "react-redux";
import { setMovieGenres } from "reduxToolkit/slices/movies";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    background: theme.palette.secondary.dark
  },
  content: {
    flexGrow: 1,
  },
}));

export default function MainLayout({ route }) {
  const classes = useStyles();
  const { genres } = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.values(genres).length) {
      getMovieGenres()
        .then(res => {
          dispatch(setMovieGenres(res.data.genres));
        })
        .catch(err => console.error(err));
    }
  }, [genres]);

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
      </main>
    </div>
  );
}
