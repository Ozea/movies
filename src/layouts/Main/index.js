import React, { Suspense } from "react";
// Core material
import { CssBaseline, LinearProgress, Toolbar } from "@mui/material";
import { makeStyles } from '@mui/styles';
// Components
import { Sidebar, TopBar } from "components";
// Router
import { renderRoutes } from "react-router-config";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    background: theme.palette.secondary.dark
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MainLayout({ route }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />

      <Sidebar />

      <main className={classes.content}>
        <Toolbar />
        <Suspense fallback={<LinearProgress color="error" />}>
          {renderRoutes(route.routes)}
        </Suspense>
      </main>
    </div>
  );
}
