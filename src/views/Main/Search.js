import React, { useState, useEffect } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import { GridContainer, GridItem } from 'components';
import { makeStyles } from '@mui/styles';
import { Helmet } from 'react-helmet';
import QueryString from 'query-string';
import { useHistory } from 'react-router-dom';
import SearchMoviesListing from 'components/Search/SearchMoviesListing';
import SearchTvListing from 'components/Search/TvListing';

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

export default function Search() {
  const classes = useStyles();
  const history = useHistory();
  const [listing, setListing] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
    const queryParams = QueryString.parse(history.location.search, { ignoreQueryPrefix: true });

    if (!queryParams.query || queryParams.query === "null") {
      history.push('/');
      return;
    }

    setSearchTerm(queryParams.query);

    if (queryParams.list) {
      const whitelistParams = ['movie', 'tv', 'person'];
      if (!whitelistParams.includes(queryParams.list)) {
        return initListing();
      }

      const value = queryParams.list === "movie" ? 0 : whitelistParams.indexOf(queryParams.list);
      setListing(value);
    } else {
      initListing();
    }
  }, [history]);

  const initListing = () => {
    history.push(`/search?list=movie&query=${searchTerm}`);
    setListing(0);
  }

  const renderListing = () => {
    if (listing === null) return;

    if (listing === 1) return <SearchTvListing query={searchTerm} />;

    return <SearchMoviesListing query={searchTerm} />;
  }

  const onChange = (event, val) => {
    if (val === 0) {
      history.push(`/search?list=movies&query=${searchTerm}`);
    } else {
      history.push(`/search?list=tv&query=${searchTerm}`);
    }

    setListing(val);
  }

  return (
    <>
      <Helmet><title>Search</title></Helmet>
      <GridContainer justifyContent="center" marginTop={3}>
        <GridItem xs={12}>
          <Typography variant='h2' align='center' color="orange" marginBottom={1}>Found</Typography>
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
