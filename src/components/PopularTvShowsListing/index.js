import { CircularProgress, Skeleton } from '@mui/material';
import { GridItem } from 'components';
import { GridContainer } from 'components';
import CustomButton from 'components/CustomButton';
import PopularItemCard from 'components/Popular/ItemCard';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementPopularTvShowsPage, setPopularSeries } from 'reduxToolkit/slices/series';
import { getPopularTvShows } from 'services/api';
import { moviesByGenreStyles } from 'assets/jss/movieByGenreStyles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  ...moviesByGenreStyles(theme).loadMoreButton
}));

export default function PopularTvShowsListing() {
  const classes = useStyles();
  const [loadingMore, setLoadingMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { popularSeries, favorites, popularTvShowsPage } = useSelector(state => state.series);

  useEffect(() => {
    if (!popularSeries.length) {
      setLoading(true);
      fetchData().then(() => {
        setLoading(false);
      });
    }
  }, [popularSeries]);

  const fetchData = () => {
    return new Promise((res, rej) => getPopularTvShows(popularTvShowsPage)
      .then(result => {
        dispatch(incrementPopularTvShowsPage(1));
        dispatch(setPopularSeries(result.data.results));
        res();
      })
      .catch(err => console.error(err)));
  }

  const renderSeries = () => {
    return popularSeries.filter(item => item.poster_path).map(serie => {
      const isFavorite = favorites.find(fav => fav.id === serie.id);
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

  const fetchMoreSeriesHandler = () => {
    setLoadingMore(true);
    fetchData().then(() => {
      setLoadingMore(false);
    });
  }

  return (
    <GridContainer marginTop={5}>
      {loading || !popularSeries.length
        ? renderLoadingSpinner()
        : <>
          {renderSeries()}

          <GridContainer justifyContent="center">
            <GridItem marginBottom={1} marginTop={4}>
              <CustomButton
                title={
                  loadingMore
                    ? <GridContainer alignItems="center">
                      <>Load more</>
                      <CircularProgress size={15} style={{ marginLeft: '.5rem' }} color="white" />
                    </GridContainer>
                    : "Load more"
                }
                disabled={loadingMore}
                onClick={fetchMoreSeriesHandler}
                buttonClassName={classes.loadMoreButton} />
            </GridItem>
          </GridContainer>
        </>}
    </GridContainer>
  );
}
