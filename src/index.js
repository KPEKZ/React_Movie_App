import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";

const movie = {
  title: "Avengers : Infinity War",
  vote_average: 8.5,
  image: "https://image.tmdb.org/t/p/w500/544LXWd8lerbryS251XQltF1Gs9.jpg",
  overview:
    "As the Avangers and their allies have continued to protect the world from threats"
};

function Image(props) {
  return <img src={props.src} alt={props.src} />;
}

class MovieItem extends React.Component {
  render() {
    const { title, vote_average, image } = this.props.data;
    return (
      <div>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);