import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ title, movies, onAddToWatchList, onAddToWatchedList }) => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  
  return (
    <div className="movie-list">
      <h2>{title}</h2>
      <div className="movie-items">
        {movies?.map((movie) => (
          <div className="movie-item" key={movie.id}>
            {/* Todo: Display the movie poster */}
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-details">
              {/* Todo: Display the movie title */}
              <h1>{movie.title}</h1>
              {/* Todo: Display more movie details if needed */}
            </div>
            <div className="movie-actions">
              {/* Todo: Add functionality to add movie to watch list */}
              <p>{movie.overview}</p>
              {onAddToWatchList && (
                <button
                  onClick={() => {
                    onAddToWatchList(movie);
                  }}
                >
                  Add to watch list
                </button>
              )}

              {onAddToWatchedList && (
              <button
                onClick={() => {
                  onAddToWatchedList(movie);
                }}
              >
                Mark as watched
              </button>
              )}
              {/* Todo: Add functionality to mark movie as watched */}

              {/* Todo: Link to the movie details page */}
              <Link to={`/movie/${movie.id}`}>Movie details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
