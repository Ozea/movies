import { Skeleton } from '@mui/material';
import { GridContainer } from 'components';
import PopularItemCard from 'components/Popular/ItemCard';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPopularSeries } from 'reduxToolkit/slices/series';
import { getPopularTvShows } from 'services/api';

export default function PopularTvShowsListing() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { popularSeries, favorites } = useSelector(state => state.series);

  useEffect(() => {
    if (!popularSeries.length) {
      setLoading(true);
      getPopularTvShows()
        .then(result => {
          dispatch(setPopularSeries(result.data.results));
          setLoading(false);
        })
        .catch(err => console.error(err));
    }
  }, [popularSeries]);

  const renderSeries = () => {
    return popularSeries.filter(item => item.poster_path).map(serie => {
      const isFavorite = favorites.find(fav => fav === serie.id);
      return <PopularItemCard data={serie} isFavorite={isFavorite} type="tv" key={serie.id} />;
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
      {loading || !popularSeries.length
        ? renderLoadingSpinner()
        : renderSeries()}
    </GridContainer>
  );
}
