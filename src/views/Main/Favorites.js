import React, { useState, useEffect } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import { GridContainer, GridItem } from 'components';
import { makeStyles } from '@mui/styles';
import { Helmet } from 'react-helmet';
import QueryString from 'query-string';
import { useHistory } from 'react-router-dom';
import FavoriteMoviesListing from 'components/Favorite/Movies';
import FavoriteTvShowsListing from 'components/Favorite/TvShows';

const useStyles = makeStyles(theme => ({
  root: {
    "& .Mui-selected": {
      color: theme.palette.orange
    }
  },
  tab: {
    color: 'white'
  },
  indicator: {
    backgroundColor: theme.palette.orange
  }
}));

export default function Popular() {
  const classes = useStyles();
  const history = useHistory();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const queryParams = QueryString.parse(history.location.search, { ignoreQueryPrefix: true });

    if (queryParams.list) {
      if (!['movie', 'tv'].includes(queryParams.list)) {
        return initListing();
      }

      const value = queryParams.list === "movie" ? 0 : 1;
      setListing(value);
    } else {
      initListing();
    }
  }, [history]);

  const initListing = () => {
    history.push('/favorites?list=movie');
    setListing(0);
  }

  const renderListing = () => {
    if (listing === null) return;

    if (listing === 1) return <FavoriteTvShowsListing />;

    return <FavoriteMoviesListing />;
  }

  const onChange = (event, val) => {
    if (val === 0) {
      history.push('/favorites?list=movies');
    } else {
      history.push('/favorites?list=tv');
    }

    setListing(val);
  }

  return (
    <>
      <Helmet><title>Favorite {listing === 1 ? 'tv shows' : 'movies'}</title></Helmet>
      <GridContainer justifyContent="center" marginTop={3}>
        <GridItem xs={12}>
          <Typography variant='h2' align='center' color="orange" marginBottom={1}>Favorite</Typography>
        </GridItem>
        <GridItem xs={12}>
          <Tabs
            classes={{
              root: classes.root,
              indicator: classes.indicator
            }}
            value={listing || 0}
            onChange={onChange}
            centered>
            {["Movies", "TV shows"].map(item => <Tab className={classes.tab} label={item} key={item} />)}
          </Tabs>
        </GridItem>
      </GridContainer>

      {renderListing()}
    </>
  );
}
