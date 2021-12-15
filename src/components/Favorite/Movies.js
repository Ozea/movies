import React from 'react';
import { GridContainer } from 'components';
import PopularItemCard from 'components/Popular/ItemCard';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export default function FavoriteMoviesListing() {
  const { favorites } = useSelector(state => state.movies);

  const renderMovies = () => {
    if (!favorites.length) return <Typography variant="h3" color="orange">No favorite movies so far!</Typography>;

    return favorites.map(movie => {
      return <PopularItemCard data={movie} key={movie.id} />;
    });
  }

  return (
    <GridContainer marginTop={5} justifyContent="center">
      {renderMovies()}
    </GridContainer>
  );
}
