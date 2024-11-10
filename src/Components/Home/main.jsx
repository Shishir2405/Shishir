import React from "react";
import "../../App.css";
const Main = () => {
  return (
    <div className="min-h-screen pt-48 px-16" id="main-bg">
      <p className="font-bold text-base mb-2">👋🏻 HEY,I AM SHISHIR</p>
      <span className="font-medium text-6xl bg tracking-wide leading-none">
        {" "}
        A PASSIONATE <br />
        MERN STACK DEVELOPER  <br />
        BASED IN INDIA
      </span>
      <div className="mt-4">
        <button className="border border-white px-4 py-2 rounded-full text-xs mr-4">
          MY WORKS
        </button>
        <button className="border border-white bg-white  text-black px-4 py-2 rounded-full text-xs">
          LET'S TALK
        </button>
      </div>
    </div>
  );
};

export default Main;
