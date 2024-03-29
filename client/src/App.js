import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MoviePage from "./pages/MoviePage";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import SignUpPage from "./pages/SignUpPage";
import TvShow from "./pages/TvShow";
import Header from "./components/Header";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/player" element={<Player />} />
          <Route exact path="/tv" element={<TvShow />} />
          <Route exact path="/" element={<Netflix />} />
          <Route exact path="/movie" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
