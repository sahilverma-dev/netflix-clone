import React from "react";

import { Link } from "react-router-dom";

// import styling
import "./Style/Hero.css";

export default function Hero({
  id,
  title,
  backdropUrl,
  posterUrl,
  rating,
  overview,
}) {
  return (
    <div className="hero">
      <img src={backdropUrl} alt={title} className="hero-bg" />
      <div className="hero-info">
        <div className="container">
          <div className="hero-poster">
            <img src={posterUrl} alt={title} className="poster" />
          </div>
          <div className="hero-details">
            <h1 className="hero-movie-name">{title}</h1>
            <span className="rating">{rating}</span>
            <p className="overview">{overview}</p>
            <div className="detail-btns">
              <Link to={`movies/id=${id}`} className="hero-btn play-now">
                Play Now
              </Link>
              <Link className="hero-btn watch-later">Watch Later</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
