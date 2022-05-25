import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Main from "./components/Main";
import DetailScreen from "./components/DetailScreen";
import "./styles/mainStyle.css";
import config from "./config";
import { AnimatePresence } from "framer-motion";

function App() {
  // Get API Token
  const { API_TOKEN } = config;

  // Fetched Data Stored in state for later use
  const [fetchData, setFetchData] = useState({
    movieData: "",
    isLoading: true,
    configData: "",
  });

  // Component Will Mount Use Effect
  useEffect(() => {
    const fetchData = async () => {
      // Preforms a API request and fetches data
      Promise.all([
        fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_TOKEN}&language=en-US&page=1`
        ),
        fetch(
          `https://api.themoviedb.org/3/configuration?api_key=${API_TOKEN}`
        ),
      ])
        .then(async ([movieData, configData, genre]) => {
          const a = await movieData.json();
          const b = await configData.json();
          setFetchData({
            movieData: a.results,
            isLoading: false,
            configData: b,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    // Callback to the function
    fetchData();
  }, []);

  return (
    <div className="container">
      {fetchData.isLoading ? (
        <h1>LOADING</h1>
      ) : (
        <Router>
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route
                path="/movieapp/"
                element={
                  <Main
                    movieData={fetchData.movieData}
                    configData={fetchData.configData}
                    genre={fetchData.genre}
                  />
                }
              />
              <Route path="/details" element={<DetailScreen />} />
            </Routes>
          </AnimatePresence>
        </Router>
      )}
    </div>
  );
}

export default App;

// Config API request
//const [configData, setConfigData] = useState();
// const fetchConfig = async () => {
//   // Preforms a API request and fetches data
//   const data = await fetch(
//     "https://api.themoviedb.org/3/configuration?api_key=9fd90fba4c58b92212c5f4cd69742fc2"
//   );

//   // Converts the data into json
//   const json = await data.json();

//   // Updates the state with the returned data
//   setConfigData(json);
// };

// // Callback to the function
// fetchConfig();
// console.log(configData);

// const fetchData = async () => {
//   // Preforms a API request and fetches data
//   const data = await fetch(
//     "https://api.themoviedb.org/3/movie/latest?api_key=9fd90fba4c58b92212c5f4cd69742fc2&language=en-US"
//   );

//   // Converts the data into json
//   const json = await data.json();

//   // Updates the state with the returned data
//   setMovieData({
//     movieData: json,
//     isLoading: false,
//     urlPath: "",
//   });
// };

// // Callback to the function
// fetchData();
