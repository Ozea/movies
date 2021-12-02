import React, { Suspense } from "react";
// Styles
import { makeStyles } from '@mui/styles';
// Assets
import AuthImage from "assets/auth-bg.jpg";
import { renderRoutes } from "react-router-config";
import { AppBar, Button, Typography } from "@mui/material";
import { GridContainer } from "components";
import { GridItem } from "components";
import { HowToReg } from "@mui/icons-material";

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundImage: `url(${AuthImage})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  mask: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    zIndex: '0',
    background: 'linear-gradient(to top, #2F3B52A3, #2F3B5294, #8080807d)',
  },
  appBar: {
    padding: theme.spacing(1.75, 2)
  }
}));

export default function AuthLayout({ route }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.mask} />
      <AppBar className={classes.appBar}>
        <GridContainer justifyContent="space-between">
          <GridItem style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" color="orange">METAFLEX</Typography>
          </GridItem>
          <div style={{ display: 'flex' }}>
            <GridItem>
              <Button
                variant="outlined"
                color="info"
                startIcon={<HowToReg style={{ fill: 'white' }} />}
                sx={{ textTransform: 'initial', color: 'white' }}>Register</Button>
            </GridItem>
          </div>
        </GridContainer>
      </AppBar>

      <Suspense fallback={<div>Loading...</div>}>
        {renderRoutes(route.routes)}
      </Suspense>
    </div>
  );
}
