import React, { Suspense } from "react";
// Core material
import { CssBaseline, makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";
import Sidebar from "components/Sidebar";
import { renderRoutes } from "react-router-config";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
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
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>

      <Sidebar />

      <main className={classes.content}>
        <Toolbar />
        <Suspense fallback={<div>Loading...</div>}>
          {renderRoutes(route.routes)}
        </Suspense>
      </main>
    </div>
  );
}
