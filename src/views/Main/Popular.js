import React, { useState } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import { GridContainer, GridItem } from 'components';
import PopularMoviesListing from 'components/PopularMoviesListing';
import PopularTvShowsListing from 'components/PopularTvShowsListing';
import { makeStyles } from '@mui/styles';
import { Helmet } from 'react-helmet';

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
  const [listing, setListing] = useState(0);

  const renderListing = () => {
    if (listing === 1) {
      return <PopularTvShowsListing />;
    }

    return <PopularMoviesListing />;
  }

  const onChange = (event, val) => {
    setListing(val);
  }

  return (
    <>
      <Helmet><title>Popular {listing === 1 ? 'tv shows' : 'movies'}</title></Helmet>
      <GridContainer justifyContent="center" marginTop={3}>
        <GridItem xs={12}><Typography variant='h2' align='center' marginBottom={1}>Popular</Typography></GridItem>
        <GridItem xs={12}>
          <Tabs
            classes={{
              root: classes.root,
              indicator: classes.indicator
            }}
            value={listing}
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
