import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGetSimBalanceQuery } from "../../../redux/api/simApi";
import { Loader } from "../../Loader";
import { CheckBalance } from "./CheckBalance";
import { DisplayBalance } from "./DisplayBalance";
import { ToggleAccountActions } from "../toggle/ToggleAccountActions";
import { BalanceMainContainer } from "../topup/topup.styled";
import { TopUpMain } from "../topup/TopUpMain";

export const BalanceMain: React.FC = () => {
  const [isCheckOn, setIsCheckOn] = useState(true);
  const userSimNumber = useSelector((s: any) => s.userInfo.userSimNumber);

  const handleToggle = () => {
    setIsCheckOn(!isCheckOn);
  };
  return (
    <div className="flex flex-col flex-wrap justify-center gap-4 p-4 w-full">
      <ToggleAccountActions handleToggle={handleToggle} isCheckOn={isCheckOn} />
      {!isCheckOn ? (
        <TopUpMain />
      ) : (
        <>
          <CheckBalance />
          {userSimNumber ? (
            <DisplayBalance userSimNumber={userSimNumber} />
          ) : null}
        </>
      )}
    </div>
  );
};
