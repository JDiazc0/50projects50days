import React, { useEffect, useState } from "react";
import "./MovieApp.css";
import FloatingButton from "../../FloatingButton";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";

export default function MovieApp() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchMovies(API_URL);
  }, []);

  const fetchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && searchTerm !== "") {
      fetchMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    } else {
      window.location.reload();
    }
  };

  const getClassByRate = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <section id="17" className="section-MovieApp">
      <FloatingButton
        day="17"
        url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day17"
        position="left"
      />
      <header className="header-day17">
        <form id="form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="search-day17"
            placeholder="Search movie"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </form>
      </header>
      <div className="container-movies">
        {movies.map((movie) => {
          const { title, poster_path, vote_average, overview } = movie;
          return (
            <div className="movie-day17" key={movie.id}>
              <img src={`${IMG_PATH}${poster_path}`} alt={title} />
              <div className="movie-info">
                <h3>{title}</h3>
                <span className={getClassByRate(vote_average)}>
                  {vote_average}
                </span>
              </div>
              <div className="overview-day17">
                <h3>Overview</h3>
                {overview}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
