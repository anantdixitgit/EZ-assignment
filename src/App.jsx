import React from "react";
// optional — only if you added custom styles
import "./index.css"; // ✅ must be imported in main.jsx or here
import "./App.css";
import Hero from "./components/Hero.jsx";
import Teams from "./components/Teams";
import Story from "./components/Story.jsx";
import FilmProduction from "./components/FilmProduction";
import Branding from "./components/Branding.jsx";
import Artcurtain from "./components/Artcurtain";
import Portfolio from "./components/portfolio";
import Forms from "./components/Forms";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Teams />
              <Story />
              <Portfolio />
              <Forms />
            </>
          }
        />
        <Route path="/filmproduction" element={<FilmProduction />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/artcurtain" element={<Artcurtain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
