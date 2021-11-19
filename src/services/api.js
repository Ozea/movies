import { instance } from './axios';

export const getTrendingMovies = () => {
  return instance.get('/trending/movie/week');
}
