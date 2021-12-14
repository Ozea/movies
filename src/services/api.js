import { instance } from './axios';

export const originalImageBaseUrl = 'https://image.tmdb.org/t/p/original';

export const getTrendingMovies = () => {
  return instance.get('/trending/movie/week');
}

export const getTrendingTvShows = () => {
  return instance.get('/trending/tv/week');
}

export const getPopularTvShows = page => {
  return instance.get('/tv/popular', {
    params: {
      language: 'us',
      page
    }
  });
}

export const getPopularMovies = (page = 1) => {
  return instance.get('/movie/popular', {
    params: {
      language: 'us',
      page
    }
  });
}

export const getTvShowById = id => {
  return instance.get(`/tv/${id}`, {
    params: {
      language: 'en-US',
      append_to_response: 'videos,images,credits,similar'
    }
  });
}

export const getTvShowsByGenre = (genreId, page = 1) => {
  return instance.get(`/discover/tv`, {
    params: {
      language: 'en-US',
      sort_by: 'popularity.desc',
      include_adult: 'false',
      include_video: 'false',
      page,
      with_genres: genreId,
      with_watch_monetization_types: 'flatrate'
    }
  });
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
      append_to_response: 'videos,images,credits,similar'
    }
  });
}

export const getMovieGenres = () => {
  return instance.get('/genre/movie/list', {
    params: {
      language: 'en-US'
    }
  });
}

export const getTvGenres = () => {
  return instance.get('/genre/tv/list', {
    params: {
      language: 'en-US'
    }
  });
}

export const getMoviesByGenre = (genreId, page = 1) => {
  return instance.get(`/discover/movie`, {
    params: {
      language: 'en-US',
      sort_by: 'popularity.desc',
      include_adult: 'false',
      include_video: 'false',
      page,
      with_genres: genreId,
      with_watch_monetization_types: 'flatrate'
    }
  });
}
