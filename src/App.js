import "./App.css";
import Row from "./components/Row/Row";
import requests from "./request";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Shows" fetchUrl={requests.fetchActionShows} />
      <Row title="Comedy Shows" fetchUrl={requests.fetchComedyShows} />
      <Row title="Horror Shows" fetchUrl={requests.fetchHorrorShows} />
      <Row title="Romance Shows" fetchUrl={requests.fetchRomanceShows} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
