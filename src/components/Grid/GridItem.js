import React from "react";
// Prop types
import PropTypes from "prop-types";
// @mui/material components
import { makeStyles } from '@mui/styles';
import Grid from "@mui/material/Grid";
import classNames from "classnames";

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
      className={classNames({
        [classes.grid]: props.padding !== 0,
        [className]: className
      })}>
      {children}
    </Grid >
  );
}

GridItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
