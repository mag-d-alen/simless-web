import React from "react";
import { Button } from "../../modal/Button";


export const ModalButton: React.FC<{
  clickHandler: () => void;
}> = ({ clickHandler }) => {
  return (
    <div className="flex items-center w-full p-6 space-x-2 ">
      <Button
        text={"שמור שינויים"}
        handleClick={() => {
          clickHandler();
        }}
      />
    </div>
  );
};
