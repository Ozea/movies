import { instance } from './axios';

export const originalImageBaseUrl = 'https://image.tmdb.org/t/p/original';

export const getTrendingMovies = () => {
  return instance.get('/trending/movie/week');
}

export const getNowPlayingMovies = () => {
  return instance.get('/movie/now_playing', {
    params: {
      language: 'us',
      page: 1
    }
  });
}

export const getMovieDetails = id => {
  return instance.get(`/movie/${id}`, {
    params: {
      append_to_response: 'videos,images'
    }
  });
}
