import React from "react";

function FilmProduction() {
  return (
    <div
      className="relative  min-h-screen w-full bg-cover bg-center p-20 mt-5"
      style={{ backgroundImage: "url('/BG.png')" }}
    >
      <div className="story-container max-w-[80%]  mx-auto text-center flex flex-col justify-center">
        <h1 className="storyheading">
          "Filmmaking is a chance to live many lifetimes." - Robert Altman
        </h1>
        <img className="storyline" src="Vector 5.svg" alt="line"></img>
      </div>

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[80%] gap-5 mx-auto h-full mt-5">
          <div className="grid   grid-col-2 gap-4 h-full">
            <img className="Filmproduction1" src="Frame 32.png"></img>
          </div>
          <div className="flex flex-col align-center p-5 h-full gap-5 mt-5 ">
            <p className="para">
              Who says films are just an escape? We see them as a way to live
              many lives - to feel, to explore, and to tell stories that stay.
              And with each film, we carry new memories and new reasons to keep
              creating. V crafts:
              <br />
              <ul>
                <li>. Documentation</li>
                <li>. Corporate Vedio</li>
                <li>. 2D Animation Vedio</li>
                <li>. 3D Animation Vedio</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col align-center">
        <h3 className="mx-auto">Explore Now</h3>
        <button>
          <img className="storyArrow mx-auto" alt="Arrow" src="Arrow.svg"></img>
        </button>
      </div>
    </div>
  );
}

export default FilmProduction;
