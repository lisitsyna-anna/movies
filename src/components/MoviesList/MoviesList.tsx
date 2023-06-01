import { Location } from 'history';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../services';
import { IMovie } from '../../interfaces';

import {
  MoviesListStyled,
  MovieItem,
  MovieInfo,
  MovieName,
  MovieImg,
  RealeseDate,
} from './MoviesList.styled';

interface IMovieListProps {
  movies: IMovie[];
  location: Location<{}>;
}

const MoviesList: React.FC<IMovieListProps> = ({ movies, location }) => {
  return (
    <MoviesListStyled>
      {movies.map(({ id, title, poster_path, release_date }) => (
        <MovieItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MovieImg
              src={
                poster_path
                  ? IMAGE_URL + poster_path
                  : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
              }
              alt={title}
              loading="lazy"
              width={250}
            />
            <MovieInfo>
              <MovieName>{title ? title : 'There is no title here yet. '}</MovieName>
              <RealeseDate>
                {release_date ? new Date(release_date).getFullYear() : '---'}
              </RealeseDate>
            </MovieInfo>
          </Link>
        </MovieItem>
      ))}
    </MoviesListStyled>
  );
};

export default MoviesList;
