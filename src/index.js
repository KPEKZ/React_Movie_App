import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import "./styles.css";

const movie = {
  title: "Avengers : Infinity War",
  vote_average: 8.5,
  image: "https://image.tmdb.org/t/p/w500/544LXWd8lerbryS251XQltF1Gs9.jpg",
  overview:
    "As the Avangers and their allies have continued to protect the world from threats"
};

function Image(props) {
  return <img width="100%" src={props.src} alt={props.src} />;
}

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false
    };
  }

  toggleOverview = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };

  render() {
    const { title, vote_average, image, overview } = this.props.data;
    return (
      <div style={{ width: "300px", margin: "auto" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="btn" type="button" onClick={this.toggleOverview}>
            {this.state.show ? "hide" : "show"}
          </button>

          <button
            className={this.state.like ? "btn btn--like" : "btn"}
            type="button"
            onClick={this.handleLike}
          >
            {this.state.like ? "unlike" : "like"}
          </button>
        </div>

        {this.state.show === true ? <p>{overview}</p> : null}
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
