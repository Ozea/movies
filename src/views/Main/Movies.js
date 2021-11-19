import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// Redux
import { getTrendingMovies } from 'services/api';
import { GridContainer, GridItem } from 'components';
// Images
import Dune from 'assets/dune.jpg';
import Action from 'assets/action.jpg';
import Bond from 'assets/bond.jpg';
import Ethernals from 'assets/ethernals.jpg';
import Venom from 'assets/venom.jpg';
import Finch from 'assets/finch.jpg';
import Halloween from 'assets/halloween_kills.jpg';
// Components
import MovieDetails from 'components/Movie/Details';
import ShadowedCard from 'components/Movie/ShadowedCard';
// Utils
import { genres } from 'utils/movieGenres';
// Helmet
import { Helmet } from 'react-helmet';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  cardText: {
    position: 'absolute',
    fontStyle: 'italic',
    '& h3': {
      fontWeight: 'bold',
      letterSpacing: '1px',
      textTransform: 'uppercase'
    }
  },
  catergoryName: {
    fontWeight: 'bold'
  }
}));

export default function Movies() {
  const classes = useStyles();
  const firstMovieGenres = [
    { id: 35, name: 'Comedy', grid: 3, imgUrl: Action },
    { id: 18, name: 'Drama', grid: 3, imgUrl: Ethernals },
    { id: 28, name: 'Action', grid: 6, imgUrl: Bond }
  ];
  const secondMovieGenres = [
    { id: 878, name: 'Science Fiction', grid: 6, imgUrl: Finch },
    { id: 14, name: 'Fantasy', grid: 3, imgUrl: Venom },
    { id: 27, name: 'Horror', grid: 3, imgUrl: Halloween }
  ];

  useEffect(() => {
    getTrendingMovies()
      .then(result => {
        const moviesOfTheWeek = result.data.results.slice(0, 10);
        const movieGenreIds = moviesOfTheWeek[0].genre_ids;
        const movieGenres = movieGenreIds.map(genre => genreLookUp(genre));
        console.log(movieGenres);
      })
      .catch(err => console.error(err));
  }, []);

  const genreLookUp = genreId => {
    return genres.find(g => g.id === genreId);
  }

  var items = [
    {
      name: "Dune",
      description: "Probably the most random thing you have ever seen!",
      img: Dune
    },
    {
      name: "Venom",
      description: "Hello World!",
      img: Venom
    },
    {
      name: "Finch",
      description: "Hello World for Finch!",
      img: Finch
    }
  ];

  return (
    <>
      <Helmet><title>Movies</title></Helmet>
      <GridContainer alignItems="center" justifyContent="center">
        <GridItem style={{ width: '100%' }}>
          <Typography variant="h2" color="textPrimary" className={classes.catergoryName}>Popular now</Typography>
          <Carousel>
            {items.map((item, i) =>
              <ShadowedCard imageUrl={item.img} containerClassname={{ height: '450px', marginTop: '1rem' }} key={i}>
                <MovieDetails
                  title={item.name}
                  genres={["Action", "Adventure", "Drama"]}
                  description={item.description} />
              </ShadowedCard>
            )}
          </Carousel>
        </GridItem>

        <GridContainer style={{ marginTop: '1.5rem' }}>
          <GridItem><Typography variant="h2" color="textPrimary" className={classes.catergoryName}>Genres</Typography></GridItem>

          <GridContainer style={{ marginTop: '1.5rem' }}>
            {firstMovieGenres.map(item => (
              <GridItem xs={item.grid} key={item.id}>
                <ShadowedCard imageUrl={item.imgUrl}>
                  <div className={classes.cardText}><Typography variant="h3" color="textPrimary">{item.name}</Typography></div>
                </ShadowedCard>
              </GridItem>
            ))}
          </GridContainer>

          <GridContainer style={{ marginTop: '1.5rem' }}>
            {secondMovieGenres.map(item => (
              <GridItem xs={item.grid} key={item.id}>
                <ShadowedCard imageUrl={item.imgUrl}>
                  <div className={classes.cardText}><Typography variant="h3" color="textPrimary">{item.name}</Typography></div>
                </ShadowedCard>
              </GridItem>
            ))}
          </GridContainer>
        </GridContainer>
      </GridContainer>
    </>
  );
}
