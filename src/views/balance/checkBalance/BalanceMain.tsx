import React from "react";
import { useSelector } from "react-redux";
import { CheckBalance } from "./CheckBalance";
import { DisplayBalance } from "./DisplayBalance";


export const BalanceMain: React.FC = () => {
  const userSimNumber = useSelector((s: any) => s.userInfo.userSimNumber);

  return (
    <div className="flex flex-col flex-wrap justify-center gap-4 p-4 w-full">
      <CheckBalance />
      {userSimNumber ? <DisplayBalance userSimNumber={userSimNumber} /> : null}
    </div>
  );
};
