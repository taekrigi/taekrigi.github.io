import React from "react";
import MovieList from "../components/movie/MovieList";

const favoriteMovies = [
  { title: "쇼생크탈출", stars: 5 },
  { title: "탑건 매버릭", stars: 5 },
];

const latestWatchedMovies = [
  { title: "오펜하이머", stars: 3.5 },
  { title: "엘리멘탈", stars: 4.0 },
  { title: "미션임파서블", stars: 4.0 },
];

const Movie = () => {
  return (
    <>
      <h1>My Favorite Movies</h1>
      <MovieList movies={favoriteMovies}></MovieList>
      <h1>My Latest Watched Movies</h1>
      <MovieList movies={latestWatchedMovies}></MovieList>
    </>
  );
};

export default Movie;
