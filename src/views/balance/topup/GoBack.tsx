import React from "react";
import { useDispatch } from "react-redux";
import { setCheckoutStep } from "../../../redux/TopUpSlice";
import { CloseDialogIcon } from "../../editButton/icons/CloseDialogIcon";
import { Button } from "../../editButton/modal/Button";

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
