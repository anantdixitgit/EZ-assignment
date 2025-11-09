import React from "react";

function Portfolio() {
  return (
    <div
      className="relative p-5 min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/BG.png')" }}
    >
      <div className="Portfolio-container max-w-[90%]  flex flex-col justify-center  items-center gap-5 mx-auto">
        <img
          className="portfolioImage1 mb-5"
          alt="portfolioImage1"
          src="Frame 20.png"
        ></img>
        <div className=" relative flex justify-center w-full">
          <img
            className="portfolioImage2 absolute left-[20%] translate-x-[-100%] translate-y-[-70%]"
            alt="portfolioImage2"
            src="Cam Group.svg"
          ></img>
          <img
            className="portfolioImage mt-5"
            alt="storyborder"
            src="Group 11.png"
          ></img>
        </div>
      </div>
      ...
    </div>
  );
}

export default Portfolio;
