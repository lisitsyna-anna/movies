import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { getMovieById, IMAGE_URL } from '../../services';
import { IMovieById } from '../../interfaces';

import RequestError from '../../components/RequestError';
import BackLink from '../../components/BackLink';
import Loader from '../../components/Loader';

import {
  Title,
  MainSection,
  MovieInfoWrap,
  MovieImg,
  MovieName,
  InfoList,
  AdditionalSection,
  AdditionalTitle,
  LinkListItem,
  LinkList,
  StyledNavLink,
} from './MovieDetailsPage.styled';

const MovieDetailsPage: React.FC = () => {
  const [movie, setMovie] = useState<IMovieById | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = (location.state?.from as string) ?? '/';

  useEffect(() => {
    async function getMovieDetailsById(movieId: number) {
      try {
        const movieDetails = await getMovieById(movieId);
        setMovie(movieDetails);
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setMovie(null);
        }
      }
    }

    getMovieDetailsById(Number(movieId));
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {!movie && error && <RequestError />}
      {movie && (
        <>
          <MainSection>
            <Title>Movie details</Title>
            <MovieImg
              src={
                movie.poster_path
                  ? IMAGE_URL + movie.poster_path
                  : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
              }
              alt={movie.title}
              width={288}
              height={432}
            />
            <MovieInfoWrap>
              <MovieName>
                {movie.title ? movie.title : 'There is no title yet'} (
                {new Date(movie.release_date).getFullYear()})
              </MovieName>
              <InfoList>
                <li>
                  <p>
                    <b>Rating: </b>
                    {movie.vote_average.toFixed(1)}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Overview:</b> {movie.overview}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Genres:</b> {movie.genres.map(genre => genre.name).join(', ')}
                  </p>
                </li>
              </InfoList>
            </MovieInfoWrap>
          </MainSection>

          <AdditionalSection>
            <AdditionalTitle>Additional information</AdditionalTitle>
            <LinkList>
              <LinkListItem>
                <StyledNavLink to="cast" state={{ from: backLinkHref }}>
                  Cast
                </StyledNavLink>
              </LinkListItem>
              <LinkListItem>
                <StyledNavLink to="reviews" state={{ from: backLinkHref }}>
                  Reviews
                </StyledNavLink>
              </LinkListItem>
            </LinkList>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </AdditionalSection>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
