import React from "react";
import { Button } from "./Button";

export const ModalButtons: React.FC<{
  closeDialog: () => void;
  clickHandler: () => void;
}> = ({ closeDialog, clickHandler }) => {
  return (
    <div className=" flex flex-shrink-0 items-center justify-center p-4 border-t border-gray-200 rounded-b-md  mb-20 mt-auto">
      <Button
        text={"  שמור השינויים"}
        // className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
        handleClick={clickHandler}
      />
      <Button handleClick={closeDialog} />
    </div>
  );
};
