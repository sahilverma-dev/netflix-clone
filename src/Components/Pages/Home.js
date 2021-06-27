// importing react hooks
import React, { useState, useEffect } from "react";

// importing conponents
import Hero from "../Hero";
import Slider from "../Slider";

// importing request
import { requests, IMG_PATH } from "../../requests";

export default function Home() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(requests.Popular)
      .then((response) => response.json())
      .then((data) => {
        let random = Math.floor(Math.random() * data.results.length);
        let result = data.results[random];
        setMovie(
          (result = {
            id: result.id,
            backdropUrl: `${IMG_PATH}${result.backdrop_path}`,
            posterUrl: `${IMG_PATH}${result.poster_path}`,
            title: result.title,
            rating: result.vote_average,
            overview: result.overview,
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      <Hero
        id={movie.id}
        backdropUrl={movie.backdropUrl}
        posterUrl={movie.posterUrl}
        title={movie.title}
        rating={movie.rating}
        overview={movie.overview}
      />
      <Slider api={requests.Popular} title="Popular Movies" />
      <Slider api={requests.Comedy} title="Comedy Movies" />
      <Slider api={requests.Romance} title="Romentic Movies" />
      <Slider api={requests.Horror} title="Horror Movies" />
    </div>
  );
}
