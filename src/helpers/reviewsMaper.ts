import { IReview } from '../interfaces';

export const reviewsMaper = (reviews: IReview[]): IReview[] => {
  return reviews.map(({ id, author, content }) => ({ id, author, content }));
};
