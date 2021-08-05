import React from "react";
// Prop types
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";

const styles = {
  grid: {
    padding: "0 15px"
  }
};

const useStyles = makeStyles(styles);

export default function GridItem(props) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid
      item {...rest}
      className={clsx({
        [classes.grid]: props.padding !== 0,
        className
      })}>
      {children}
    </Grid >
  );
}

GridItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
