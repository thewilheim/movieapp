import React from "react";
import MovieCard from "./MovieCard";
import { motion } from "framer-motion";

function Recommneded(props) {
  const { movieData, configData, name } = props;

  return (
    <motion.div
      className="category"
      initial={{
        y: "100vh",
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        y: { type: "spring", stiffness: 80, damping: 15 },
        duration: 2,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <h1>{name.toUpperCase()}</h1>
      <div className="cardContainer">
        {movieData.slice(0, 12).map((result) => {
          return (
            <MovieCard
              key={result.id}
              movieData={result}
              configData={configData}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Recommneded;
