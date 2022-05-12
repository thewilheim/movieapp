import { React, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/detailScreenStyle.css";
import image from "../images/movie-poster.jpg";
import config from "../config";
import DetailCard from "./DetailCard";

function DetailScreen() {
  // Set location
  const location = useLocation();
  // Get the movie data from the location state aka the Link from component "Movie Card"
  const { movieData, configData } = location.state;

  //  Get API Token
  const { API_TOKEN } = config;

  // Store Cast Details
  const [fetchData, setFetchData] = useState({
    cast: "",
    isLoading: true,
  });
  // Small Fucntion to combine the two parts needed to get the movie poster
  const getImagePath = () => {
    const urlPath = configData.images.secure_base_url;
    const imageSize = configData.images.poster_sizes[3];
    const imagePath = movieData.poster_path;
    return urlPath + imageSize + imagePath;
  };

  // API request for cast details using the movie ID located in the movieData array
  useEffect(() => {
    const fetchCast = async () => {
      await fetch(
        `https://api.themoviedb.org/3/movie/${movieData.id}/credits?api_key=${API_TOKEN}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) =>
          setFetchData({
            cast: data,
            isLoading: false,
          })
        );
    };

    fetchCast();
  }, []);

  return (
    <div className="detailContainer">
      {fetchData.isLoading ? (
        <h1>Loading</h1>
      ) : (
        <DetailCard
          movieData={movieData}
          getImagePath={getImagePath}
          cast={fetchData.cast}
        />
      )}
    </div>
  );
}

export default DetailScreen;
