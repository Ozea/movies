import { Skeleton } from '@mui/material';
import { GridContainer } from 'components';
import PopularItemCard from 'components/Popular/ItemCard';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPopularMovies } from 'reduxToolkit/slices/movies';
import { getPopularMovies } from 'services/api';

export default function PopularMoviesListing() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { popularMovies, favorites } = useSelector(state => state.movies);

  useEffect(() => {
    if (!popularMovies.length) {
      setLoading(true);
      getPopularMovies()
        .then(result => {
          dispatch(setPopularMovies(result.data.results));
          setLoading(false);
        })
        .catch(err => console.error(err));
    }
  }, [popularMovies]);

  const renderMovies = () => {
    return popularMovies.filter(item => item.poster_path).map(movie => {
      const isFavorite = favorites.find(fav => fav === movie.id);
      return <PopularItemCard data={movie} isFavorite={isFavorite} key={movie.id} />;
    });
  }

  const renderLoadingSpinner = () => {
    return Array.from(Array(10)).map((item, index) =>
      <Skeleton
        width={250}
        height={400}
        key={index}
        style={{
          transform: 'unset',
          margin: '0 auto 1.75rem'
        }} />);
  }

  return (
    <GridContainer marginTop={5}>
      {loading || !popularMovies.length
        ? renderLoadingSpinner()
        : renderMovies()}
    </GridContainer>
  );
}
