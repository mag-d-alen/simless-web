import React from "react";
import { Button } from "./Button";

export const ModalButtons: React.FC<{
  closeDialog: () => void;
  clickHandler: () => void;
}> = ({ closeDialog, clickHandler }) => {
  return (
    <div className=" flex items-center justify-center border-t border-gray-200 rounded-b-md px-10 pt-80 pb-80 gap-4">
      <Button
        text={"שמור שינויים"}
        handleClick={() => {
          clickHandler();
          closeDialog();
        }}
      />
      <Button handleClick={closeDialog} />
    </div>
  );
};
