import React, { Suspense } from "react";
// Styles
import { LinearProgress } from "@mui/material";
import { makeStyles } from '@mui/styles';
// Assets
import ErrorImage from "assets/error.jpg";
import { renderRoutes } from "react-router-config";
import { GridContainer } from "components";

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundImage: `url(${ErrorImage})`,
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
}));

export default function ErrorsLayout({ route }) {
  const classes = useStyles();

  return (
    <GridContainer className={classes.wrapper} justifyContent="center" alignItems="center">
      <Suspense fallback={<LinearProgress />}>
        {renderRoutes(route.routes)}
      </Suspense>
    </GridContainer>
  );
}
