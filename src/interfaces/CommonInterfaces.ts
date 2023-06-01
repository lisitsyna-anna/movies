export interface ITheme {
  colors: {
    black: string;
    white: string;
    primaryText: string;
    secondaryText: string;
    backgroundBody: string;
    accentColor: string;
    hoverColor: string;
  };
  space: number[];
  fonts: {
    body: string;
    heading: string;
    monospace: string;
  };
  fontSizes: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
  };
  fontWeights: {
    normal: number;
    bold: number;
  };
  lineHeights: {
    body: number;
    heading: number;
  };
  borders: {
    none: string;
    normal: string;
  };
  radii: {
    none: string;
    normal: string;
    round: string;
  };
}

export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export interface IMovieById extends IMovie {
  genres: { id: number; name: string }[];
  overview: string;
  vote_average: number;
}

export interface IThrendingMoviesData {
  page: number;
  total_pages: number;
  results: IMovie[];
}

export interface IActor {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

export interface IReview {
  id: string;
  author: string;
  content: string;
}
