import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../request";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchBannerData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const fetchBannerData = () => {
    let promise = null;
    promise = axios
      .get(requests.fetchNetflixOriginals)
      .then((response) => {
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
      })
      .catch((error) => {
        setMovie("");
        console.log(error);
      });
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">{truncate(movie?.overview, 200)}</h1>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
}

export default Banner;
