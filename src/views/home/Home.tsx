import React from "react";
import { PaymentSteps } from "../payment/PaymentSteps";
import { HomeContainer, Typography } from "./home.styled";
import { useSelector } from "react-redux";
import { PackagesMain } from "./choosePackage/PackagesMain";
import { ProgressBar } from "../ProgressBar";

export const Home: React.FC = () => {
  const chosenDeal = useSelector((s: any) => s.simPurchase.chosenDeal);
  const checkoutStep = useSelector((s: any) => s.topUp.checkoutStep);
  return (
    <div className="flex flex-col align-center  bg-gray-100 text-gray-700 ">
      <ProgressBar value={ checkoutStep*25} />
      {chosenDeal.length && checkoutStep > 1 ? (
        <PaymentSteps />
      ) : (
        <PackagesMain />
      )}
    </div>
  );
};
