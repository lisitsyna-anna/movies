import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from 'react-avatar';
import { getMovieReviews } from '../../services';
import { IReview } from '../../interfaces';

import RequestError from '../RequestError';
import Loader from '../Loader';

import { ReviewsList, ReviewItem, AuthorInfoWrapper, Author } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviewsByMovieId(movieId: number) {
      try {
        setIsFetching(true);
        const result = await getMovieReviews(movieId);
        setReviews(result);
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setReviews([]);
        }
      } finally {
        setIsFetching(false);
      }
    }

    getReviewsByMovieId(Number(movieId));
  }, [movieId]);

  return (
    <>
      {error && !isFetching && reviews.length === 0 && <RequestError />}
      {isFetching && !error && <Loader />}
      {reviews.length > 0 && !error && (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <AuthorInfoWrapper>
                <Avatar name={author} size={'30px'} round />
                <Author>Author: {author}</Author>
              </AuthorInfoWrapper>
              <p>{content}</p>
            </ReviewItem>
          ))}
        </ReviewsList>
      )}
      {reviews.length === 0 && !error && !isFetching && (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
