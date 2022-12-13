import React from "react";
import { TopupTopBar } from "./topup.styled";
import { PaymentSteps } from "../../payment/PaymentSteps";
import { TopUpBalance } from "./TopUpBalance";
import { useSelector } from "react-redux";

export const TopUpMain: React.FC = () => {
  const checkoutStep = useSelector((s: any) => s.topUp.checkoutStep);
  return (
    <div className=" flex flex-col align-center gap-4 p-4 w-full">
      <TopupTopBar>{checkoutStep === 1 && <TopUpBalance />}</TopupTopBar>
      {checkoutStep > 1 && <PaymentSteps />}
    </div>
  );
};
