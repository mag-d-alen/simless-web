import React from "react";
import { useSelector } from "react-redux";
import { UserDetails } from "../form/UserDetails";
import { PaymentMain } from "./PaymentMain";
import { GoBack } from "../balance/topup/GoBack";
import { PaymentResult } from "./PaymentResult";

export const PaymentSteps: React.FC = () => {
  const { checkoutStep, payment } = useSelector((s: any) => s.topUp);
  return (
    <>
      {checkoutStep === 2 ? <UserDetails /> : null}
      {checkoutStep === 3 ? <PaymentMain /> : null}
      {checkoutStep === 4 ? <PaymentResult /> : null}
    </>
  );
};
