import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';
import React from 'react'

const useStyles = makeStyles({
  buttonLeaf: {
    padding: '5px 15px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    color: 'white',
    border: '1px solid #3A9EFD',
    borderRadius: '5px',
    letterSpacing: 0,
    boxShadow: '0px 0px 5px 0px #3A9EFD',
    "&:hover": {
      background: '#3A9EFD'
    },
    "& svg": {
      fill: 'white'
    }
  },
});

const CustomButton = ({ title, buttonClassName, ...rest }) => {
  const classes = useStyles();

  return (<Button className={classNames(classes.buttonLeaf, buttonClassName)} startIcon={<rest.icon />} {...rest}>
    <Typography>{title}</Typography>
  </Button>);
}

export default CustomButton;
