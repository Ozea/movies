import { Typography } from '@mui/material';
import { GridItem } from 'components';
import { GridContainer } from 'components';
import NowPlayingListing from 'components/NowPlayingList';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function Upcoming() {
  return (
    <>
      <Helmet><title>Now playing</title></Helmet>
      <GridContainer justifyContent="center" marginTop={3}>
        <GridItem xs={12}>
          <Typography variant='h2' align='center' color="orange" marginBottom={1}>Now playing movies</Typography>
        </GridItem>
      </GridContainer>

      <NowPlayingListing />
    </>
  );
}
