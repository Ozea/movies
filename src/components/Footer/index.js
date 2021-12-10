import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.orange
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Typography color="inherit" variant="caption">METAFLEX</Typography>
      {' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        right: 0,
        bottom: 0,
        width: 'calc(100% - 240px)',
        zIndex: 200,
        borderLeft: theme => `1px solid ${theme.palette.secondary.dark}`
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 1.75,
          px: 1.75,
          mt: 'auto',
          backgroundColor: theme => theme.palette.primary.dark
        }}
      >
        <Container maxWidth="sm" sx={{ ml: 0 }}>
          <Typography variant="body1">
            Designed and developed by
            {' '}
            <a className={classes.link} href="https://github.com/Ozea">Alexander Osinskii</a></Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}