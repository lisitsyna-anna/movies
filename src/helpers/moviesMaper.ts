import { IMovie } from '../interfaces';

export const moviesMaper = (
  movies: IMovie[]
): Pick<IMovie, 'id' | 'title' | 'poster_path' | 'release_date' | 'vote_average'>[] => {
  return movies.map(({ id, title, poster_path, release_date, vote_average }) => ({
    id,
    title,
    poster_path,
    release_date,
    vote_average,
  }));
};
