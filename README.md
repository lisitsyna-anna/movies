# Movie Search App

Preview of the working application can be found [here](https://lisitsyna-anna.github.io/movies).

## Description

This application is a movie search app that allows users to explore and discover trending movies,
search for movies based on keywords, and view detailed information about movies, including cast
members and reviews. It utilizes the themoviedb.org API to fetch movie data.

## Features

### Home Page

- Upon visiting the home page, users are greeted with a collection of trending movies for the day.
- Clicking on a movie opens a detailed view with additional information about the movie.
- The page includes a "Load More" button that allows users to fetch more trending movies.

### Movie Details Page

- Clicking on a movie opens a detailed view with additional information about the movie.
- The movie details page includes nested routes where users can view the cast members and read
  reviews from other users.

### Search Movie Page

- The search movie page features a search form where users can enter keywords to search for movies.
- Upon submitting the form, the application performs a search in the database based on the entered
  keyword.
- If matching movies are found, they are displayed as a list of movie cards. Clicking on a card
  opens a detailed view of the movie.
- The page includes a "Load More" button that fetches additional movies with the same keyword, if
  available.

### Additional Features

- The application includes a NotFoundPage component to handle non-existent routes.
- A Loader component is implemented to display a loading state while data is being fetched.
- User notifications are implemented to provide feedback and notifications to the users.

## Routes

- '/' - Home component, the home page with a list of popular movies.
- '/search-movie' - Movies component, the page for searching movies based on a keyword.
- '/search-movie/:movieId' - MovieDetails component, the page with detailed information about a
  movie.
- '/search-movie/:movieId/cast' - Cast component, information about the cast. Rendered on the
  MovieDetails page.
- '/search-movie/:movieId/reviews' - Reviews component, information about the reviews. Rendered on
  the MovieDetails page.

## Installation and Setup

Follow these steps to install and run the Movie Search App:

1. To run this application locally on your computer, you need to have TypeScript installed globally.
2. Clone the repository: git clone [https://github.com/lisitsyna-anna/movies]
3. Navigate to the project directory: cd movies
4. Install dependencies: npm install
5. Obtain an API key from themoviedb.org and add it to the moviesApi.ts file.
6. Start the development server: npm start
7. Open the app in your browser at http://localhost:3000

## Technologies Used

- React
- React Router
- TypeScript
- Styled Components
- Axios
- Usehooks-ts
- React-avatar
- React-icons
- React-hot-toast
- React-spinners

## Future Enhancements

- Implement user authentication and user profiles to allow users to save their favorite movies.
- Enhance the search functionality with filters and sorting options.
- Implement pagination for better navigation through search results.

## Contact Information

If you have any questions or feedback, please feel free to contact me:

- Email: [anna.lisicina9309@gmail.com](mailto:anna.lisicina9309@gmail.com)
- GitHub: [lisitsyna-anna](https://github.com/lisitsyna-anna)
