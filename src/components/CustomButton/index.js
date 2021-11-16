import { Button, makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles(theme => ({
  buttonLeaf: {
    padding: '5px 15px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    color: 'white',
    border: '1px solid #3A9EFD',
    borderRadius: '5px',
    letterSpacing: 0,
    width: '100%',
    boxShadow: '0px 0px 5px 0px #3A9EFD',
    "&:hover": {
      background: '#3A9EFD'
    }
  },
}));

const CustomButton = ({ title, ...rest }) => {
  const classes = useStyles();

  return (<Button className={classes.buttonLeaf} startIcon={<rest.icon />} {...rest}>
    {title}
  </Button>);
}

export default CustomButton;
