import React from "react";
import { Link } from "react-router-dom";
import "../styles/cardStyle.css";

function MovieCard(props) {
  const { movieData, configData } = props;

  const getImagePath = () => {
    const urlPath = configData.images.secure_base_url;
    const imageSize = configData.images.poster_sizes[3];
    const imagePath = movieData.poster_path;
    return urlPath + imageSize + imagePath;
  };

  return (
    <div className="infoCard">
      <Link
        to={"/details"}
        state={{ movieData: movieData, configData: configData }}
      >
        <img src={getImagePath()} />
      </Link>
    </div>
  );
}

export default MovieCard;
