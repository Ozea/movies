import { Paper, styled } from '@mui/material';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: '.5s all ease',
  },
  shadow: {
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100%',
    background: theme.palette.movieMask
  }
}));

const ShadowedCard = ({ shadowClassName, imageClassName, imageUrl, containerClassname, children, scaleImageOnHover = false, imageStyles, ...props }) => {
  const classes = useStyles();
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    boxShadow: theme.palette.shadow,
    color: theme.palette.text.secondary,
    overflow: 'hidden',
    borderRadius: '5px',
    backgroundColor: theme.palette.primary.dark,
    ...containerClassname,
    '&:hover > div:nth-of-type(1)': scaleImageOnHover
      ? { transform: 'scale(1.07)' }
      : {}
  }));

  return (
    <Item style={{ marginTop: '0' }}>
      <div className={classNames(classes.image, imageClassName)} style={{ backgroundImage: `url(${imageUrl})`, ...imageStyles }}></div>
      <div className={classNames(classes.shadow, shadowClassName)}></div>
      {children}
    </Item>
  );
}

export default ShadowedCard;
