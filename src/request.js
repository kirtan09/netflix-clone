const API_KEY = "77156a239648ed1959ed44f9bff9d62a";

const requests = {
  fetchTrending = `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals = `/discover/tv?apu_key=${API_KEY}&with_networks=213`,
  fetchTopRated= `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies = `/discover/tv?apu_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies = `/discover/tv?apu_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies = `/discover/tv?apu_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies = `/discover/tv?apu_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries = `/discover/tv?apu_key=${API_KEY}&with_genres=99 `
}

export default requests;