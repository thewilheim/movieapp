import React from "react";
import MovieCard from "./MovieCard";

function Recommneded(props) {
  const { movieData, configData, name } = props;

  const results = movieData.results;

  return (
    <div className="category">
      <h1>{name.toUpperCase()}</h1>
      <div className="cardContainer">
        {results.slice(0, 9).map((result) => {
          return (
            <MovieCard
              key={result.id}
              movieData={result}
              configData={configData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Recommneded;
