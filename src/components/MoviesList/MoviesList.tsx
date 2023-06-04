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
  ImgWrapper,
  Rating,
} from './MoviesList.styled';

interface IMovieListProps {
  movies: IMovie[];
  location: Location<{}>;
}

const MoviesList: React.FC<IMovieListProps> = ({ movies, location }) => {
  return (
    <MoviesListStyled>
      {movies.map(({ id, title, poster_path, release_date, vote_average }, index) => (
        <MovieItem key={id}>
          <Link to={`/serch-movie/${id}`} state={{ from: location }}>
            <ImgWrapper>
              <MovieImg
                src={
                  poster_path
                    ? IMAGE_URL + poster_path
                    : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
                }
                alt={title}
                loading="lazy"
                width={288}
                height={432}
              />
              <Rating>{vote_average.toFixed(1)} </Rating>
            </ImgWrapper>

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
