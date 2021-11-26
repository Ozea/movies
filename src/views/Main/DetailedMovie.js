import React from 'react';
import { useParams } from 'react-router';

const DetailedMovie = () => {
  const { id } = useParams();

  return(
    <div>Movie with id {id}</div>
  );
}

export default DetailedMovie;
