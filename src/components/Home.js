import React from "react";
import MovieList from "./MovieList";

const Home = ({
  movies,
  watchList,
  watchedList,
  addToWatchList,
  addToWatchedList,
}) => {
  return (
    <div className="home">
      {/* Add necessary component in Home page */}
      <MovieList
        title="Movie"
        movies={movies}
        onAddToWatchList={addToWatchList}
        onAddToWatchedList={addToWatchedList}
      />

      <MovieList
        title="Watch List"
        movies={watchList}
        onAddToWatchedList={addToWatchedList}
      />

      <MovieList title="Watched List" movies={watchedList} />
    </div>
  );
};

export default Home;
