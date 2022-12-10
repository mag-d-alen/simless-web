import React from "react";
import { AddAnimation } from "../../../stylingComponents/AddAnimation";
import { CloseDialogIcon } from "./CloseDialogIcon";

export const Toast: React.FC<{
  text: string;
  color?: string;
  closeToast: () => void;
}> = ({ text, color, closeToast }) => {
  return (
    <div className="fixed flex content-center justify-center w-full h-full  backdrop-blur-sm p-8 overflow-x-hidden overflow-y-auto md:inset-0 h-full">
      <AddAnimation>
        <div className=" bg-white shadow-lg flex justify-between h-20 w-80 items-center py-2 px-3 bg-clip-padding border-b border-gray-200 rounded-lg">
          <button type="button" onClick={closeToast} aria-label="Close">
            <CloseDialogIcon />
          </button>
          {text}
        </div>
      </AddAnimation>
    </div>
  );
};
