import React from "react";

function Teams() {
  return (
    <div
      className="relative p-5 h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/BG.png')" }}
    >
      <div className="container  mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto h-full">
          <div className="grid   grid-col-2 gap-4 h-full">
            <img className="teams11" alt="logo" src="\Group 9.png"></img>
            <img
              className="teams12"
              src="136881584_562ce9a4-ee1d-4be1-8b12-5b603ee14c6b 1.png"
            ></img>
          </div>
          <div className="flex flex-col align-center p-5   ">
            <img className="teams21 mb-4" alt="logo" src="Group 2.svg"></img>
            <h1 className="teams22 mb-5">
              Take a closer look at the stories V bring to life.
            </h1>

            <button className="button1 self-auto px-6 py-2">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
      ...
    </div>
  );
}

export default Teams;
