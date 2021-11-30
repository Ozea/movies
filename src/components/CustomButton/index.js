import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';
import React from 'react'

const useStyles = makeStyles(theme => ({
  buttonLeaf: {
    padding: '5px 15px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    color: 'white',
    border: `1px solid ${theme.palette.icon}`,
    transition: '.35s all ease',
    borderRadius: '5px',
    letterSpacing: 0,
    boxShadow: `0px 0px 5px -2px ${theme.palette.icon}`,
    "&:hover": {
      background: `${theme.palette.icon}`,
      "& p": {
        color: theme.palette.text.hover,
      },
      "& svg, & svg path": {
        fill: theme.palette.text.hover
      }
    },
    "& svg": {
      fill: 'white'
    }
  },
}));

const CustomButton = ({ title, buttonClassName, ...rest }) => {
  const classes = useStyles();

  return (<Button className={classNames(classes.buttonLeaf, buttonClassName)} startIcon={rest.icon ? <rest.icon /> : null} {...rest}>
    <Typography {...rest.text}>{title}</Typography>
  </Button>);
}

export default CustomButton;
