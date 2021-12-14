import { Typography } from '@mui/material';
import { GridItem } from 'components';
import { GridContainer } from 'components';
import UpcomingListing from 'components/Upcoming';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function Upcoming() {
  return (
    <>
      <Helmet><title>Upcoming movies</title></Helmet>
      <GridContainer justifyContent="center" marginTop={3}>
        <GridItem xs={12}>
          <Typography variant='h2' align='center' color="orange" marginBottom={1}>Upcoming movies</Typography>
        </GridItem>
      </GridContainer>

      <UpcomingListing />
    </>
  );
}
