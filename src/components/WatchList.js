import React from 'react';
import MovieList from './MovieList';

const WatchList = ({ movies, addToWatchedList }) => {
  return (
    <div className="watch-list">
      <MovieList title="Watch List" movies={movies} onAddToWatchedList={addToWatchedList} />
    </div>
  );
};

export default WatchList;
