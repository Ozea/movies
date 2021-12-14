import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  ribbon: {
    position: 'absolute',
    right: '-5px',
    top: '-5px',
    zIndex: '1',
    overflow: 'hidden',
    width: '75px',
    height: '75px',
    textAlign: 'right',
    "& > span": {
      fontSize: '10px',
      fontWeight: 'bold',
      color: '#FFF',
      textTransform: 'uppercase',
      textAlign: 'center',
      lineHeight: '20px',
      transform: 'rotate(45deg)',
      width: '100px',
      display: 'block',
      background: '#F2AA4Cff',
      boxShadow: '0 3px 10px -5px rgba(0, 0, 0, 1)',
      position: 'absolute',
      top: '19px',
      right: '-21px',
      "&:before": {
        content: "''",
        position: 'absolute',
        left: '0px',
        top: '100%',
        zIndex: '-1',
        borderLeft: '3px solid #F2AA4Cff',
        borderRight: '3px solid transparent',
        borderBottom: '3px solid transparent',
        borderTop: '3px solid #F2AA4Cff'
      },
      "&:after": {
        content: "''",
        position: 'absolute',
        right: '0px',
        top: '100%',
        zIndex: '-1',
        borderLeft: '3px solid transparent',
        borderRight: '3px solid #F2AA4Cff',
        borderBottom: '3px solid transparent',
        borderTop: '3px solid #F2AA4Cff'
      }
    }
  }
}));

export default function Ribbon(props) {
  const classes = useStyles();

  return (
    <div className={classes.ribbon}>
      <span>{props.children}</span>
    </div>
  );
}
