import React from "react";
import { Button } from "./Button";

export const ModalButtons: React.FC<{
  closeDialog: () => void;
  clickHandler: () => void;
}> = ({ closeDialog, clickHandler }) => {
  return (
    <div className=" flex items-center justify-center border-t border-gray-200 rounded-b-md px-10 pt-4 pb-80 mt-auto">
      <Button text={"  שמור השינויים"} handleClick={clickHandler} />
      <Button handleClick={closeDialog} />
    </div>
  );
};
