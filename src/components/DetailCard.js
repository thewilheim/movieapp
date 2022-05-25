import React from "react";
import { Link, useLocation } from "react-router-dom";

function DetailCard(props) {
  const { movieData, getImagePath, cast } = props;
  return (
    <div className="detailContainer">
      <h3>
        <Link to="/movieapp/">Back To Dashboard</Link>
      </h3>
      <div className="detialsContent">
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
      </div>
    </div>
  );
}

export default DetailCard;
