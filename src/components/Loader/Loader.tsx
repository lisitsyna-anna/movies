import FadeLoader from 'react-spinners/FadeLoader';

const Loader: React.FC = () => {
  return (
    <FadeLoader
      color="#2196F3"
      cssOverride={{
        display: 'block',
        margin: '0 auto',
        height: '50px',
      }}
    />
  );
};

export default Loader;
