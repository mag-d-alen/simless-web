import React from "react";
import { Button } from "./Button";

export const ModalButton: React.FC<{
  text?: string;
  clickHandler: () => void;
}> = ({ clickHandler, text = "שמור שינויים" }) => {
  return (
    <div className="flex items-center py-6 space-x-2 ">
      <Button
        text={text}
        handleClick={() => {
          clickHandler();
        }}
      />
    </div>
  );
};
