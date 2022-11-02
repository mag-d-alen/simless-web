import React from "react";
import { TopUpMainContainer, TopupTopBar } from "./topup.styled";
import { PaymentSteps } from "../../payment/PaymentSteps";
import { TopUpBalance } from "./TopUpBalance";
import { useSelector } from "react-redux";

export const TopUpMain: React.FC = () => {
  const checkoutStep = useSelector((s: any) => s.topUp.checkoutStep);
  return (
    <TopUpMainContainer>
      <TopupTopBar>
        {checkoutStep === 1 && <TopUpBalance />}
        {checkoutStep > 1 && <PaymentSteps />}
      </TopupTopBar>
    </TopUpMainContainer>
  );
};
