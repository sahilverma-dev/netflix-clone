// importing react hooks
import React, { useState, useEffect } from "react";

// importing style
import "./Style/Slider.css";

// importing eraquests
import { requests, IMG_PATH } from "../requests";

export default function Slider({ api, title }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(requests.Popular)
      .then((response) => response.json())
      .then((data) => {
        const result = data.results.map((results) => {
          return {
            id: results.id,
            posterUrl: `${IMG_PATH}${results.poster_path}`,
            title: results.title,
            rating: results.vote_average,
          };
        });
        setMovie(result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="slider">
      <div className="container">
        <h3 className="slider-title">{title}</h3>
        <div className="poster-slider">
          {movie.map((item) => {
            return (
              <div className="poster" key={item.id}>
                <div className="rating">{item.rating}</div>
                <img src={item.posterUrl} alt={item.title} />
                <div className="name">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
