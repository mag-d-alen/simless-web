import React from "react";
import { useDispatch } from "react-redux";
import { setCheckoutStep } from "../../../redux/TopUpSlice";
import { CloseDialogIcon } from "../../sim_actions/editButton/icons/CloseDialogIcon";
import { Button } from "../../sim_actions/modal/Button";

export const GoBack = () => {
  const dispatch = useDispatch();
  return (
    <div
      className=" absolute top-4 right-4 "
      onClick={() => dispatch(setCheckoutStep(-1))}>
      <CloseDialogIcon />
    </div>
  );
};
