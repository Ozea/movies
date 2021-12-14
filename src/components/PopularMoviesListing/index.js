import { CircularProgress, Skeleton } from '@mui/material';
import { GridItem } from 'components';
import { GridContainer } from 'components';
import CustomButton from 'components/CustomButton';
import PopularItemCard from 'components/Popular/ItemCard';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPopularMovies, incrementPopularMoviesPage } from 'reduxToolkit/slices/movies';
import { getPopularMovies } from 'services/api';
import { moviesByGenreStyles } from 'assets/jss/movieByGenreStyles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  ...moviesByGenreStyles(theme).loadMoreButton
}));

export default function PopularMoviesListing() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const dispatch = useDispatch();
  const { popularMovies, favorites, popularMoviesPage } = useSelector(state => state.movies);

  useEffect(() => {
    if (!popularMovies.length) {
      setLoading(true);
      fetchData().then(res => {
        setLoading(false);
      });
    }
  }, [popularMovies]);

  const fetchData = () => {
    return new Promise((res, rej) => getPopularMovies(popularMoviesPage)
      .then(result => {
        dispatch(incrementPopularMoviesPage(1));
        dispatch(setPopularMovies(result.data.results));
        res();
      })
      .catch(err => console.error(err)));
  }

  const renderMovies = () => {
    return popularMovies.filter(item => item.poster_path).map(movie => {
      const isFavorite = favorites.find(fav => fav.id === movie.id);
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

  const fetchMoreMoviesHandler = () => {
    setLoadingMore(true);
    fetchData().then(res => {
      setLoadingMore(false);
    });
  }

  return (
    <GridContainer marginTop={5}>
      {loading || !popularMovies.length
        ? renderLoadingSpinner()
        : <>
          {renderMovies()}

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
                onClick={fetchMoreMoviesHandler}
                buttonClassName={classes.loadMoreButton} />
            </GridItem>
          </GridContainer>
        </>}
    </GridContainer>
  );
}
