import React, { useEffect } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// Icons
import { Add, Remove } from '@mui/icons-material';
// Components
import { GridItem, GridContainer } from 'components';
// i18n
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
// Redux
import { increment, decrement, incrementByValue } from 'reduxToolkit/slices/counter';
import { getTrendingMovies } from 'services/api';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  useEffect(() => {
    getTrendingMovies()
      .then(result => {
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Typography variant="h3" color="textSecondary">{t('Movies')}!</Typography>
      <Typography variant="h4" color="textSecondary">{t('Coming soon')}!</Typography>

      {/* <Card variant="outlined">
        <CardContent>
          <Typography className={classes.title} align="center" color="textSecondary" gutterBottom>
            {t('Counter value')} - {counter.value}
          </Typography>

          <GridContainer justifyContent="center" align="center">
            <GridItem>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={() => dispatch(increment())}
                endIcon={<Add />}>
                {t('Increment')}
              </Button>
            </GridItem>
            <GridItem>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => dispatch(decrement())}
                className={classes.button}
                endIcon={<Remove />}>
                {t('Delete')}
              </Button>
            </GridItem>
            <GridItem>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => dispatch(incrementByValue(2))}
                className={classes.button}
                endIcon={<Add />}>
                {t('Increment by 2')}
              </Button>
            </GridItem>
          </GridContainer>
        </CardContent>
      </Card> */}
    </div>
  );
}
