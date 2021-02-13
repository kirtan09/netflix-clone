import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";
import Youtube from "react-youtube";
import requests from "../../request";

const image_base_url = "https://image.tmdb.org/t/p/w500/";
const video_base_url = `https://api.themoviedb.org/3/`;

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(null);

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

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const fetchTrailerUrl = (id, type) => {
    const url = `${video_base_url}${type}/${id}${requests.fetchMovieTrailer}`;
    let loadedTrailerUrl = null,
      loadedTrailerUrls = [];
    const promises = [];
    promises.push(
      axios.get(url).then((response) => {
        loadedTrailerUrls = response.data.results;
        loadedTrailerUrl = loadedTrailerUrls[0].key;
      })
    );
    Promise.all(promises)
      .then(() => {
        if (loadedTrailerUrl === trailerUrl) {
          setTrailerUrl("");
        } else {
          setTrailerUrl(loadedTrailerUrl);
        }
      })
      .catch((error) => {
        setTrailerUrl("");
        console.log(error);
      });
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`${image_base_url}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie?.title || movie?.name || movie?.original_name}
            onClick={() =>
              fetchTrailerUrl(movie.id, movie.title ? "movie" : "tv")
            }
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
