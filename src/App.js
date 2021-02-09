import "./App.css";
import Row from "./components/Row/Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      {/* <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/> */}
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      {/* <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/> */}
    </div>
  );
}

export default App;
