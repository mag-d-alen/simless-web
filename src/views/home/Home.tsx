import React from "react";
import { Hero } from "../../assets/Hero";
import {
  home_welcome_text1,
  home_welcome_text2,
  home_welcome_text3,
} from "../../assets/text";
import { Guide } from "./Guide";

export const Home = () => {
  return (
    <div className="flex flex-col justify-center px-8 mx-1 my-4 overflow-auto">
      <div className=" text-center text-4xl gap-4 px-8  mb-4 text-gray-500">
        ברוכים הבאים
      </div>
      <div className="py-8 flex w-full justify-around border-b border-white">
        <Hero />
        <div className="flex flex-col wrap">
          <p className="text-gray-500"> {home_welcome_text1}</p>
          <p className="text-gray-500"> {home_welcome_text2}</p>
          <p className="text-gray-500"> {home_welcome_text3}</p>
        </div>
      </div>
      <Guide />
    </div>
  );
};
