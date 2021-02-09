const API_KEY = "77156a239648ed1959ed44f9bff9d62a";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-GB`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-GB`,
  fetchActionShows: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  fetchComedyShows: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorShows: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceShows: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
