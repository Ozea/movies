import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  buttonLeaf: {
    display: 'flex',
    padding: '5px 15px',
    textDecoration: 'none',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textTransform: 'none',
    color: 'white',
    border: `1px solid ${theme.palette.icon}`,
    transition: '.35s all ease',
    borderRadius: '5px',
    letterSpacing: 0,
    boxShadow: `0px 0px 5px -2px ${theme.palette.icon}`,
    '&:hover': {
      background: `${theme.palette.icon}`,
      '& p': {
        color: theme.palette.text.hover,
      },
      '& svg, & svg path': {
        fill: theme.palette.text.hover,
      },
    },
    '& svg': {
      fill: 'white',
      marginRight: '10px',
    },
  },
  disabled: {
    pointerEvents: 'none',
  }
}))

const CustomLink = ({ title, buttonClassName, ...rest }) => {
  const classes = useStyles()

  return (
    <Link className={classNames(classes.buttonLeaf, { [classes.disabled]: rest.disabled }, buttonClassName)} {...rest}>
      {rest.icon ? <rest.icon /> : null}
      <Typography {...rest.text}>{title}</Typography>
    </Link>
  )
}

export default CustomLink
