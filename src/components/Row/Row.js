import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/w500/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // runs based on a specific condition
  useEffect(() => {
    async function fetchData() {
      //fetch url of given fetchUrl using the api key given
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {/* posters */}
        {movies.map((movie) => (
          <img
            className="row-poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
