import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <div>
            {movie.title}
            {movie.stars}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
