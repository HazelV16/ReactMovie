import React from 'react';
import MovieList from './MovieList';
const WatchedList = ({ movies }) => {
  return (
    <div className="watched-list">
      <MovieList title="Watched List" movies={movies} />
    </div>
  );
};

export default WatchedList;
