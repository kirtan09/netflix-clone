import React from "react";
import Row from "../Row/Row";
import requests from "../../request";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Navbar />
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

export default HomeScreen;
