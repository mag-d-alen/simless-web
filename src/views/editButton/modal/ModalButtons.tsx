import React from "react";
import { Button } from "./Button";

export const ModalButtons: React.FC<{
  closeDialog: () => void;
  clickHandler: () => void;
}> = ({ closeDialog, clickHandler }) => {
  return (
    <div className="flex items-center p-6 space-x-2 ">
      <Button
        text={"שמור שינויים"}
        handleClick={() => {
          clickHandler();
          closeDialog();
        }}
      />
    </div>
  );
};
