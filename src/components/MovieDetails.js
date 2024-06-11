import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = process.env.React_App_MOVIE_API_KEY;
const API_URL = process.env.React_App_MOVIE_API_BASE_URL;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch data by movie Id here
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}?api_key=${API_KEY}`);
        const data = await response.json();
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching movie details", error);
      }
    }
    fetchMovieDetail();
  }, [id]);
  

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <div className="movie-image">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-content">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
