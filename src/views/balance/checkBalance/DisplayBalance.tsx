import React from "react";
import { useGetSimBalanceQuery } from "../../../redux/api/simApi";
import { Loader } from "../../Loader";

import { BalanceDisplayContainer } from "./checkBalance.styled";

export const DisplayBalance: React.FC<{ userSimNumber: string }> = ({
  userSimNumber,
}) => {
  const { data, isLoading, isError } = useGetSimBalanceQuery(userSimNumber);
  return (
    <BalanceDisplayContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>sim number: {userSimNumber}</div>
          {data ? (
            <div>
              balance: {data.balance} {data.curr}
            </div>
          ) : null}
        </>
      )}
    </BalanceDisplayContainer>
  );
};
