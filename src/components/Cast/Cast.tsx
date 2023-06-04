import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastsById, IMAGE_URL } from '../../services';
import { IActor } from '../../interfaces';

import RequestError from '../RequestError';
import Loader from '../Loader';

import { ActorsList, ActorItem, ActorImg, ActorInfoWrapper } from './Cast.styled';

const Cast: React.FC = () => {
  const { movieId } = useParams<string>();
  const [actors, setActors] = useState<IActor[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function getActorsByMovieId(movieId: number) {
      try {
        setIsFetching(true);
        const result = await getCastsById(movieId);
        setActors(result);
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setActors([]);
        }
      } finally {
        setIsFetching(false);
      }
    }

    getActorsByMovieId(Number(movieId));
  }, [movieId]);

  return (
    <>
      {error && !isFetching && <RequestError />}
      {isFetching && !error && <Loader />}

      {actors?.length > 0 && (
        <ActorsList>
          {actors.map(({ id, name, profile_path, character }) => (
            <ActorItem key={id}>
              <ActorImg
                src={
                  profile_path
                    ? IMAGE_URL + profile_path
                    : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
                }
                alt={name}
                width={288}
                height={432}
              />

              <ActorInfoWrapper>
                <b>{name}</b>
                <p>
                  <b>Character:</b> {character}
                </p>
              </ActorInfoWrapper>
            </ActorItem>
          ))}
        </ActorsList>
      )}
      {actors.length === 0 && !error && !isFetching && <p>There is no information here yet</p>}
    </>
  );
};

export default Cast;
