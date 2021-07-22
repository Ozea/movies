import React, { Suspense } from "react";
// Styles
import { makeStyles } from "@material-ui/core";
// Assets
import AuthImage from "assets/auth.jpg";
import { renderRoutes } from "react-router-config";

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundImage: `url(${AuthImage})`,
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
}));

export default function AuthLayout({ route }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Suspense fallback={<div>Loading...</div>}>
        {renderRoutes(route.routes)}
      </Suspense>
    </div>
  );
}
