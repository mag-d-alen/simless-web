import React from "react";
import { useSelector } from "react-redux";
import { UserDetails } from "../form/UserDetails";
import { PaymentMain } from "./PaymentMain";
import { GoBack } from "../balance/topup/GoBack";
import { StepProgress } from "../balance/topup/StepProgress";
import { PaymentResult } from "./PaymentResult";

export const PaymentSteps: React.FC = () => {
  const { checkoutStep, payment } = useSelector((s: any) => s.topUp);
  return (
    <>
      <StepProgress />
      {checkoutStep > 1 && <GoBack />}
      {checkoutStep === 2 ? (
        <UserDetails />
      ) : null}
      {checkoutStep === 3 ? <PaymentMain /> : null}
      {checkoutStep === 4 ? <PaymentResult /> : null}
    </>
  );
};
