import { List, ListItem, Skeleton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GridItem } from 'components';
import { GridContainer } from 'components';
import CustomButton from 'components/CustomButton';
import MovieDetails from 'components/Movie/Details';
import ShadowedCardWithParallax from 'components/Movie/ShadowedCardWithParallax';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setSeriesByGenre } from 'reduxToolkit/slices/series';
import { getTvShowsByGenre } from 'services/api';
import ListItemCard from 'components/Movie/ListItemCard';
import { formatMovieUrl } from 'utils/movies';
import { moviesByGenreStyles } from 'assets/jss/movieByGenreStyles';

const useStyles = makeStyles(theme => ({
  ...moviesByGenreStyles(theme)
}));

const TvShowsByGenre = props => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const { seriesByGenre, genres } = useSelector(state => state.series);
  const dispatch = useDispatch();
  const { id } = useParams();
  const tvShows = seriesByGenre[id] || [];
  const randomTvShow = tvShows[Math.floor(Math.random() * 5)];

  useEffect(() => {
    if (!seriesByGenre[id]) {
      setLoading(true);
      fetchSeries(page);
    }
  }, [id, seriesByGenre]);

  const fetchSeries = page => {
    return getTvShowsByGenre(id, page)
      .then(res => {
        dispatch(setSeriesByGenre({ genre: id, series: res.data.results }));
        setLoading(false);
      })
      .catch(err => console.error(err));
  }

  const genreLookUp = () => {
    if (Object.values(genres).length) {
      const foundGenreById = genres[id];

      if (foundGenreById) {
        return foundGenreById.name.toLowerCase();
      } else {
        return id;
      }
    }

    return <Skeleton width={100} />;
  }

  const fetchMoreTvShowsHandler = () => {
    const newPage = page + 1;
    setLoadingMore(true);
    setPage(newPage);
    fetchSeries(newPage).then(() => setLoadingMore(false));
  }

  const renderDiscoveredTvShows = () => {
    if (!tvShows.length && !Object.values(genres).length) return;

    const data = [...tvShows];

    return data.map((item, index) => (
      <React.Fragment key={index}>
        <ListItemCard data={item} globalGenres={genres} type="tv" />
      </React.Fragment >
    ))
  }

  return (
    <div className={classes.content}>
      <Helmet><title>TV - Discover by genre</title></Helmet>
      <GridContainer justifyContent="center" alignItems="center">
        {loading || !tvShows.length
          ? <GridContainer justifyContent="center" alignItems="center">
            <GridItem style={{ width: '100%' }} padding={0}>
              <Skeleton height={600} style={{ transform: 'unset' }} />
            </GridItem>

            <GridContainer direction="column" justifyContent="center" alignItems="center" className={classes.listingWrapper}>
              <List sx={{ width: '100%', maxWidth: '100%' }}>
                {Array.from(Array(10)).map((_, index) => (
                  <ListItem alignItems="flex-start" key={index}>
                    <Skeleton height={35} style={{ transform: 'unset', margin: '.25rem 0', width: '100%' }} />
                  </ListItem>
                ))}
              </List>
            </GridContainer>
          </GridContainer>
          : (<>
            <GridItem style={{ width: '100%' }} padding={0}>
              <ShadowedCardWithParallax
                imageUrl={formatMovieUrl(randomTvShow.backdrop_path)}
                axisY={65}
                containerClassname={{ height: '600px', marginTop: '1rem', boxShadow: 'unset' }}>
                <GridContainer className={classes.mainMovieContainer} direction="column" justifyContent="space-evenly">
                  <GridItem>
                    <Typography variant="h1" color="textPrimary" align="left" style={{ fontSize: '50px' }}>
                      {`Top ${genreLookUp()} series`}
                    </Typography>
                  </GridItem>
                  <GridItem style={{ marginBottom: '.5rem' }}>
                    <MovieDetails data={randomTvShow} wrapperClassName={classes.movieDetailsWrapper} />
                  </GridItem>
                </GridContainer>
              </ShadowedCardWithParallax>
            </GridItem>

            <GridContainer direction="column" justifyContent="center" alignItems="center" className={classes.mainShadow}>
              <GridContainer direction="column" justifyContent="center" alignItems="center" className={classes.listingWrapper}>
                <List sx={{ width: '100%', maxWidth: '90%' }}>
                  {renderDiscoveredTvShows()}
                </List>

                <GridItem marginBottom={1} marginTop={4}>
                  <CustomButton
                    title="Load more"
                    disabled={loadingMore}
                    onClick={fetchMoreTvShowsHandler}
                    buttonClassName={classes.loadMoreButton} />
                </GridItem>

                <GridItem marginTop={2} style={{ width: '90%' }}>
                  {loadingMore && Array.from(Array(5)).map((_, i) => <Skeleton height={30} key={i} />)}
                </GridItem>
              </GridContainer>
            </GridContainer>
          </>)
        }
      </GridContainer>
    </div>
  );
}

export default TvShowsByGenre;
