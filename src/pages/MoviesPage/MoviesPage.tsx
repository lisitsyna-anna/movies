import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { IMovie } from '../../interfaces';
import { getMovieByQuery } from '../../services';

import SearchForm from '../../components/SearchForm';
import RequestError from '../../components/RequestError';
import MoviesList from '../../components/MoviesList';
import LoadMoreButton from '../../components/LoadMoreButton';
import InfoText from '../../components/InfoText';
import Loader from '../../components/Loader';
import { SearchTitle } from './MoviesPage.styled';

const MoviesPage: React.FC = () => {
  const [searchMovies, setSearchMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery: string = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      setSearchMovies([]);
      return;
    }

    if (searchQuery.trim() === '' || searchQuery === '') {
      toast.error('Enter valid word');
      return;
    }

    async function getMoviesBySearchQuery(searchQuery: string) {
      try {
        setIsFetching(true);
        const { results, total_pages } = await getMovieByQuery(searchQuery, page);

        setTotalPages(total_pages);
        setSearchMovies(prevMovies => [...prevMovies, ...results]);

        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setSearchMovies([]);
        }
      } finally {
        setIsFetching(false);
      }
    }
    getMoviesBySearchQuery(searchQuery.toLowerCase().trim());
  }, [searchQuery, page]);

  const onSubmit = (value: string) => {
    if (value.toLowerCase().trim() === '') {
      toast.error('Enter a search term');
      return;
    }
    if (value.toLowerCase().trim() === searchQuery) {
      toast.error('Same request. Enter a new word');
      return;
    }
    if (value.toLowerCase().trim() !== searchQuery) {
      setPage(1);
      setSearchMovies([]);
      setSearchParams(value !== '' ? { query: value } : {});
    }
  };

  const handleLoadMoreBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  const showLoadMoreBtn = totalPages !== page && searchMovies.length > 0 && !error;

  return (
    <section>
      <SearchTitle>Search movies</SearchTitle>
      <SearchForm value={searchQuery} onSubmit={onSubmit} />
      {error && <RequestError />}
      {searchMovies?.length === 0 && !error && !isFetching && searchQuery !== '' && (
        <InfoText text="There are no movies for this search" />
      )}
      {isFetching && !error && <Loader />}
      {searchMovies?.length > 0 && <MoviesList movies={searchMovies} location={location} />}
      {showLoadMoreBtn && <LoadMoreButton isFetching={isFetching} onLoadMore={handleLoadMoreBtn} />}
    </section>
  );
};

export default MoviesPage;
