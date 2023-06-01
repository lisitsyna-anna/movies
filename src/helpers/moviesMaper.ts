import { IMovie } from '../interfaces';

export const moviesMaper = (
  movies: IMovie[]
): Pick<IMovie, 'id' | 'title' | 'poster_path' | 'release_date'>[] => {
  return movies.map(({ id, title, poster_path, release_date }) => ({
    id,
    title,
    poster_path,
    release_date,
  }));
};
