import React from "react";

function Artcurtain() {
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
            <img className="Filmproduction1" src="Frame35.png"></img>
          </div>
          <div className="flex flex-col align-center p-5 h-full gap-5 mt-5 ">
            <p className="para">
              Art isn’t meant to sit on distant walls - it’s meant to breathe,
              to travel, to belong. Through every festival, every performance,
              and every gathering, we help stories find their stage and their
              people. V curates: Art Festivals Live Performances Community
              Events Cultural Storytelling
              <br />
              <ul>
                <li>. Art Festivals</li>
                <li>. Live Performances</li>
                <li>. Community Events</li>
                <li>. Cultural Storytelling</li>
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

export default Artcurtain;
