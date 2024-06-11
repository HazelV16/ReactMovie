import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WatchList from "./components/WatchList";
import WatchedList from "./components/WatchedList";
import MovieDetails from "./components/MovieDetails";
import NavBar from "./components/NavBar";
import "./App.css";

const API_KEY = process.env.React_App_MOVIE_API_KEY;
const API_URL = process.env.React_App_MOVIE_API_BASE_URL;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [watchedList, setWatchedList] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    // Fetch movie data here
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/popular?api_key=${API_KEY}`);
        const data = await response.json();
        setMovies(data.results);
        console.log(data);
      } catch {
        console.log("Something went wrong");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const addToWatchList = (movie) => {
    // Handle add movie to watch list
    setWatchList([...watchList, movie]);
  };

  const addToWatchedList = (movie) => {
    // Handle add movie from watch list to watched list
    setWatchedList([...watchedList, movie]);
    setWatchList(watchList.filter((m) => m.id !== movie.id));
  };

  const handleSearch = (query) => {
    // Handle search function here
    if (!query) {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  return (
    <Router>
      <div className="App">
        <NavBar onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                movies={filteredMovies}
                watchList={watchList}
                watchedList={watchedList}
                addToWatchList={addToWatchList}
                addToWatchedList={addToWatchedList}
              />
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchList
                movies={watchList}
                addToWatchedList={addToWatchedList}
              />
            }
          />
          <Route
            path="/watchedlist"
            element={<WatchedList movies={watchedList} />}
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
