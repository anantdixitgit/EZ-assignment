import React from "react";
import { Link } from "react-router-dom";

function Story() {
  return (
    <div
      className="relative p-5 h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/BG.png')" }}
    >
      <div className="story-container max-w-[80%] mx-auto text-center flex flex-col justify-center">
        <h1 className="storyheading">
          The storyboard reveals the breadth of our craft.
        </h1>
        <img className="storyline mx-auto" src="Vector 5.svg" alt="line" />

        {/* ✅ 3 images in one row, equal size, clickable */}
        <div className="flex flex-row justify-center items-center w-full mt-8">
          <Link to="/filmproduction" className="w-1/3">
            <img
              className="w-full h-auto object-cover"
              src="Frame 31.png"
              alt="storyimage1"
            />
          </Link>

          <Link to="/branding" className="w-1/3">
            <img
              className="w-full h-auto object-cover"
              src="Frame 31 (1).png"
              alt="storyimage2"
            />
          </Link>

          <Link to="/artcurtain" className="w-1/3">
            <img
              className="w-full h-auto object-cover"
              src="Frame 31 (2).png"
              alt="storyimage3"
            />
          </Link>
        </div>
      </div>
      <h1 className="text-center">
        {" "}
        <b>please click the photos</b>
      </h1>
      <img className="storyborder" alt="storyborder" src="Frame 33.svg" />
      ...
    </div>
  );
}

export default Story;
