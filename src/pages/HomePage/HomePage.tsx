import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IMovie } from '../../interfaces';

import RequestError from '../../components/RequestError';
import MoviesList from '../../components/MoviesList';
import LoadMoreButton from '../../components/LoadMoreButton';
import { Title } from './HomePage.styled';
import { getTrendingMovies } from '../../services';

const HomePage: React.FC = () => {
  const [trendingMovies, setTrendingMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isShowLoadMoreBtn, setIsShowLoadMoreBtn] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const location = useLocation();
  console.log(totalPages);
  console.log(setIsShowLoadMoreBtn);

  useEffect(() => {
    async function getMovies(page: number) {
      try {
        setIsFetching(true);
        const { results, total_pages } = await getTrendingMovies(page);
        setTotalPages(total_pages);
        setTrendingMovies(prevMovies => {
          return [...prevMovies, ...results];
        });
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setTrendingMovies([]);
        }
      } finally {
        setIsFetching(false);
      }
    }

    getMovies(page);
  }, [page]);

  const handleLoadMoreBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Title>Trending today</Title>
      {error && <RequestError />}
      {trendingMovies?.length > 0 && <MoviesList movies={trendingMovies} location={location} />}
      {isShowLoadMoreBtn && (
        <LoadMoreButton onLoadMore={handleLoadMoreBtn} isFetching={isFetching} />
      )}
    </>
  );
};

export default HomePage;
