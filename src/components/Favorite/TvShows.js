import React from 'react';
import { GridContainer } from 'components';
import PopularItemCard from 'components/Popular/ItemCard';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export default function FavoriteTvShowsListing() {
  const { favorites } = useSelector(state => state.series);

  const renderTvShows = () => {
    if (!favorites.length) return <Typography variant="h3" color="orange">No favorite tv shows so far!</Typography>;

    return favorites.map(serie => {
      return <PopularItemCard data={serie} type="tv" key={serie.id} />;
    });
  }

  return (
    <GridContainer marginTop={5} justifyContent="center">
      {renderTvShows()}
    </GridContainer>
  );
}
