import { IActor } from '../interfaces';

export const actorsMaper = (actors: IActor[]): IActor[] => {
  return actors.map(({ id, name, profile_path, character }) => ({
    id,
    name,
    profile_path,
    character,
  }));
};
