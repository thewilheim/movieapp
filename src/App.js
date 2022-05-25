import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
        <BrowserRouter>
          <AnimatePresence>
            <Routes>
              <Route
                path="/movieapp/"
                element={
                  <Main
                    movieData={fetchData.movieData}
                    configData={fetchData.configData}
                  />
                }
              />
              <Route path="/details" element={<DetailScreen />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
