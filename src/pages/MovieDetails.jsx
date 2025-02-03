import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/movies.css"

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `https://little-spot-politician.glitch.me/movies/${id}`
      );
      console.log(response);
      setMovie(response.data);
      setLoading(false);
    };

    fetchMovie();
  }, []);
  return (
    <div className="movies-cont">
      Movie {id} Details
      {loading && <p>Loading...</p>}
      {error && <p>Error occur in loading</p>}
      {
        <div key={movie.id} className="card">
          <img src={movie.poster} alt={movie.name} />
          <h3>Title : {movie.title}</h3>
          <h3>Genre : {movie.genre}</h3>
          <p>Release Dtate: {movie.releaseDate}</p>

          <p>Description : {movie.description}</p>
        </div>
      }
    </div>
  );
};

export default MovieDetails;
