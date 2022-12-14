import React from "react";
import { AddAnimation } from "../../../stylingComponents/AddAnimation";
import { CloseDialogIcon } from "./CloseDialogIcon";

export const Toast: React.FC<{
  text: string;
  color?: string;
  closeToast: () => void;
}> = ({ text, color, closeToast }) => {
  return (
    <div className="fixed z-10 flex justify-center md:items-center w-screen h-screen md:mb-80 backdrop-blur-sm py-8 overflow-x-hidden overflow-y-auto md:inset-0 h-full">
      <AddAnimation>
        <div className=" bg-white shadow-lg flex justify-center relative w-80 h-40 items-center py-2  md:mb-80  bg-clip-padding border-b border-gray-200 rounded-lg">
          <button
            type="button"
            onClick={closeToast}
            aria-label="Close"
            className="absolute top-6 right-6">
            <CloseDialogIcon />
          </button>
          {text}
        </div>
      </AddAnimation>
    </div>
  );
};
