import React from "react";
// Prop types
import PropTypes from "prop-types";
// @mui/material components
import { makeStyles } from '@mui/styles';
import Grid from "@mui/material/Grid";

const styles = {
  grid: {
    width: "100%"
  }
};

const useStyles = makeStyles(styles);

export default function GridContainer(props) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};