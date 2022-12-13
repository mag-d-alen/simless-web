import React from "react";
import { ToggleContainer, ToggleLabel } from "./toggle.styled";
import { ToggleBalance } from "./ToggleBalance";

export const ToggleAccountActions: React.FC<{
  handleToggle: () => void;
  isCheckOn: boolean;
}> = ({ handleToggle, isCheckOn }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <ToggleLabel active={isCheckOn}>Check balance</ToggleLabel>
        <div
          onClick={() => {
            handleToggle();
          }}>
          <ToggleBalance right={!isCheckOn} />
        </div>
        <ToggleLabel active={!isCheckOn}>top up your account</ToggleLabel>
      </div>
    </>
  );
};
