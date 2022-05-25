import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function DetailCard(props) {
  const { movieData, getImagePath, cast } = props;
  return (
    <div className="detailContainer">
      <motion.h3
        initial={{
          y: "-50rem",
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          y: { type: "spring", stiffness: 80, damping: 15 },
          duration: 3,
        }}
        exit={{
          opacity: 0,
        }}
      >
        <Link to="/movieapp/">Back To Dashboard</Link>
      </motion.h3>
      <motion.div
        className="detialsContent"
        initial={{
          x: "-50rem",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          x: { type: "spring", stiffness: 80, damping: 15 },
          duration: 3,
        }}
        exit={{
          opacity: 0,
        }}
      >
        <div className="detailsHeader">
          <img src={getImagePath()} alt="" />
          <div className="movieDetails">
            {movieData.title.length > 12 ? (
              <h1 style={{ fontSize: "4rem" }}>
                {movieData.title.toUpperCase()}
              </h1>
            ) : (
              <h1>{movieData.title.toUpperCase()}</h1>
            )}
            <p>{movieData.overview}</p>
          </div>
        </div>

        <div className="castDetails">
          <h3>CAST</h3>
          <div className="castName">
            {cast.cast.slice(0, 6).map((cast) => {
              return <h4 key={cast.id}>{cast.name}</h4>;
            })}
          </div>
        </div>

        <div className="rateDetails">
          <h3>RATINGS</h3>
        </div>
      </motion.div>
    </div>
  );
}

export default DetailCard;
