import React, { Suspense } from "react";
// Styles
import { LinearProgress } from "@mui/material";
import { makeStyles } from '@mui/styles';
// Assets
import ErrorImage from "assets/error.jpg";
import { renderRoutes } from "react-router-config";

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundImage: `url(${ErrorImage})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
}));

export default function ErrorsLayout({ route }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Suspense fallback={<LinearProgress />}>
        {renderRoutes(route.routes)}
      </Suspense>
    </div>
  );
}
