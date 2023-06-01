import { Button } from './LoadMoreButton.styled';

interface ILoadMoreBtnProps {
  onLoadMore: React.MouseEventHandler;
  isFetching: boolean;
}

const LoadMoreButton: React.FC<ILoadMoreBtnProps> = ({ onLoadMore, isFetching }) => {
  return (
    <Button type="button" disabled={isFetching} onClick={onLoadMore}>
      Load More
    </Button>
  );
};

export default LoadMoreButton;
