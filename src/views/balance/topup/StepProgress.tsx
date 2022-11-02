import React from "react";
import { useSelector } from "react-redux";
import { ProgressContainer, ProgressZipper } from "./topup.styled";

export const StepProgress = () => {
  const checkoutStep = useSelector((s: any) => s.topUp.checkoutStep);
  return (
    <ProgressContainer>
      <ProgressZipper step={checkoutStep * 25}>
        step {checkoutStep}
      </ProgressZipper>
    </ProgressContainer>
  );
};
