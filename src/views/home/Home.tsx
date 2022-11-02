import React from "react";
import { PaymentSteps } from "../payment/PaymentSteps";
import { HomeContainer, Typography } from "./home.styled";
import { useSelector } from "react-redux";
import { PackagesMain } from "./choosePackage/PackagesMain";

export const Home: React.FC = () => {
  const chosenDeal = useSelector((s: any) => s.simPurchase.chosenDeal);
  const checkoutStep = useSelector((s: any) => s.topUp.checkoutStep);
  return (
    <div className="bg-red">
      <HomeContainer>
        {/* <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700"> */}
        {chosenDeal.length && checkoutStep > 1 ? (
          <PaymentSteps />
        ) : (
          <PackagesMain />
        )}
      </HomeContainer>
    </div>
  );
};
