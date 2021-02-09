import axios from "axios";

/** Base URL to get url of TMDB requests */
const instance = axios.create({
  baseURL:"https://api.themoviedb.org/3",
});

export default instance;
