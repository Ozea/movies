import React from 'react';
import { GridContainer } from 'components';
import PopularItemCard from 'components/Popular/ItemCard';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export default function WatchLaterSeriesListing() {
  const { watchLater } = useSelector(state => state.series);

  const renderTvShows = () => {
    if (!watchLater.length) return <Typography variant="h3" color="orange">No tv shows so far!</Typography>;

    return watchLater.map(tv => {
      return <PopularItemCard data={tv} type="tv" key={tv.id} />;
    });
  }

  return (
    <GridContainer marginTop={5} justifyContent="center">
      {renderTvShows()}
    </GridContainer>
  );
}
