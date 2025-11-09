import React from "react";
import "../App.css";

function Hero() {
  return (
    <div
      className="relative w-full bg-cover bg-center p-4 md:p-20 mt-5 min-h-screen"
      style={{ backgroundImage: "url('/BG.png')" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mx-auto">
          <div className="relative">
            <img
              className="homeimage11 w-full max-w-md mx-auto md:max-w-full"
              alt="logo"
              src="\Hero Mandala.png"
            ></img>
            <img
              className="homeimage12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 md:w-auto md:translate-x-[-40%] md:translate-y-[-303%]"
              src="VFilms Logo (1).png"
              alt="V Films Logo"
            ></img>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-4">
            <img
              className="homeimage21 w-full max-w-md md:max-w-full mb-2 md:mb-4"
              alt="logo"
              src="\Varnan is where stories find their voice and form (1).png"
            ></img>
            <img
              className="homeimage22 w-full max-w-md md:max-w-full mb-2 md:mb-4"
              alt="logo"
              src="Films . Brands . Art.png"
            ></img>
            <p>
              Since 2009, V’ve been telling stories - stories of people, their
              journeys, and the places that shape them. Some begin in polished
              boardrooms, others in humble village squares. But every story
              starts the same way - by listening with intention. V believes it
              takes trust, patience, and an eye for the unseen to capture what
              truly matters. V doesn’t just tell stories - V honors them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
