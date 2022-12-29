import React from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import {
  guide_step_four1,
  guide_step_one1,
  guide_step_three1,
  guide_step_two1,
} from "../../assets/text";
import { Number1 } from "./Number1";
import { Number2 } from "./Number2";
import { Number3 } from "./Number3";
import { Number4 } from "./Number4";

export const Guide = () => {
  return (
    <div className="flex flex-col justify-center mx-1 my-16 overflow-auto ">
      <div className=" text-center text-xl gap-4 px-8  mb-4 text-gray-500">
        אז איך זה עובד בעצם?
      </div>

      <div className="flex justify-around my-8">
        <div className="flex p-8 justify-around ">
          <Step1 />
        </div>
        <div className="flex flex-col wrap justify-center ">
          <p className="font-semibold">
            <Number1 />
            {guide_step_one1}
          </p>
          <p>{guide_step_one1}</p>
          <p>{guide_step_one1}</p>
        </div>
      </div>
      <div className="flex justify-around my-8">
        <div className="flex flex-col wrap justify-center ">
          <p className="font-semibold">
            <Number2 />
            {guide_step_two1}
          </p>
          <p>{guide_step_two1}</p>
          <p>{guide_step_two1}</p>
        </div>
        <div className="flex p-8 justify-around ">
          <Step2 />
        </div>
      </div>
      <div className="flex justify-around my-8">
        <div className="flex p-8 justify-around ">
          <Step3 />
        </div>

        <p className="flex flex-col wrap justify-center ">
          <p className="font-semibold">
            <Number3 />
            {guide_step_three1}
          </p>
          <p>{guide_step_three1}</p>
          <p>{guide_step_three1}</p>
        </p>
      </div>
      <div className="flex justify-around my-8">
        <div className="flex flex-col wrap justify-center ">
          <p className="font-semibold">
            <Number4 />
            {guide_step_four1}
          </p>

          <p>{guide_step_four1}</p>
          <p>{guide_step_four1}</p>
        </div>
        <div className="flex p-8 justify-around ">
          <Step4 />
        </div>
      </div>
    </div>
  );
};
