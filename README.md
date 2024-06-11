# Movie App
This is a React application for managing and viewing a collection of movies. The application includes various components such as a home page, movie details page, lists of movies to watch, and movies that have been watched. This is a movie app built using React that utilizes the API provided by [The Movie Database (TMDb)](https://www.themoviedb.org/).

## Installation

To get started with the project, follow these steps:

1. Create a new React project using `create-react-app`:

### `npx create-react-app movie-app`

2. Navigate to the project directory:

### `cd movie-app`

3. Install the required dependencies:

### `npm install react-router-dom`

4. Obtain an API key from [TMDb](https://www.themoviedb.org/documentation/api) by creating an account and generating an API key.

5. Create a `.env` file in the root directory of the project and add your API key:

### `React_App_MOVIE_API_KEY=your_api_key_here`

## Features

- **Home:** Displays a list of popular movies fetched from the TMDb API. Each movie card includes the movie title, poster, and overview.
  
- **Watchlist:** Allows users to add movies to their watchlist. Displays the movies added to the watchlist. Users can remove movies from the watchlist.
  
- **WatchedList:** Allows users to mark movies as watched. Displays the movies marked as watched. Users can remove movies from the watched list.
  
- **Search:** Provides a search input in the navigation bar. Users can search for movies by title. Displays search results in real-time as the user types.

## Technologies Used

- React
- React Router (for routing)
- Styled Components (for styling)
- dotenv (for environment variables)

### Components

- **Home.js**: This is the main landing page of the application.
- **MovieDetails.js**: This component displays the details of a selected movie.
- **MovieList.js**: This component lists all the movies.
- **NavBar.js**: This component represents the navigation bar.
- **SearchBar.js**: This component provides a search bar to find movies.
- **WatchedList.js**: This component lists all the movies that have been watched.
- **WatchList.js**: This component lists all the movies that the user intends to watch.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
