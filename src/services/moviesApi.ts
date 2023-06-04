import axios from 'axios';
import { moviesMaper, actorsMaper, reviewsMaper } from '../helpers';
import { IMovieById, IActor, IReview, IMoviesData } from '../interfaces';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '723c3471611c46346c0c4849c0dae5f2';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const TRENGING_PATH = '/trending/movie/day';

export const getTrendingMovies = async (page: number): Promise<IMoviesData> => {
  const { data } = await axios(`${TRENGING_PATH}`, {
    params: {
      api_key: API_KEY,
      page: page,
    },
  });

  return {
    page: data.page,
    results: moviesMaper(data.results),
    total_pages: data.total_pages,
  };
};

export const getMovieById = async (movieId: number): Promise<IMovieById> => {
  const {
    data: { id, title, poster_path, release_date, genres, overview, vote_average },
  } = await axios(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return { id, title, poster_path, release_date, genres, overview, vote_average };
};

export const getCastsById = async (movieId: number): Promise<IActor[]> => {
  const { data } = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  const result = actorsMaper(data.cast);
  return result;
};

export const getMovieReviews = async (movieId: number): Promise<IReview[]> => {
  const { data } = await axios(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    },
  });
  const result = reviewsMaper(data.results);
  return result;
};

export const getMovieByQuery = async (query: string, page: number): Promise<IMoviesData> => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query,
      page,
      include_adult: false,
    },
  });

  return {
    page: data.page,
    results: moviesMaper(data.results),
    total_pages: data.total_pages,
  };
};
