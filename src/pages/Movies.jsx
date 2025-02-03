import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/movies.css";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [genre, setGenre] = useState("");
  const navigate = useNavigate();

  const fetchmovie = async () => {
    try {
      const response = await axios
        .get(`https://little-spot-politician.glitch.me/movies`, {
          params: { genre },
        })
        .then((res) => {
          // console.log(res.data.movies);
          setMovie(res.data.movies);
          setLoading(false);
        });
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchmovie();
  }, [genre]);

  function handleView(id) {
    navigate(`/moviedetails/${id}`);
  }
  console.log(genre);
  return (
    <>
      <div>
        <select
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">--select option--</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Drama">Drama</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
          <option value="Crime">Crime</option>
          <option value="Animation">Animation</option>
          <option value="Fantasy">Fantasy</option>
        </select>
      </div>
      <div className="movies-cont">
        {loading && <p>Loading...</p>}
        {error && <p>Error occur in loading</p>}

        <h2>Movie Explorer</h2>
        <div className="movie-card">
          {movie.map((el) => {
            return (
              <div key={el.id} className="card">
                <img src={el.poster} alt={el.name} />
                <h3>Title : {el.title}</h3>
                <h3>Genre : {el.genre}</h3>
                <p>Release Dtate: {el.releaseDate}</p>

                {/* <p>Description : {el.description}</p> */}
                <div>
                  <button
                    className="Add-btn"
                    onClick={() => navigate("/addmovies")}
                  >
                    Add Movies
                  </button>
                  <button className="Dlt-btn">Delete</button>
                  <button
                    className="View-btn"
                    onClick={() => {
                      handleView(el.id);
                    }}
                  >
                    View More...
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Movies;
