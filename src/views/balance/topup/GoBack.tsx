import React from "react";
import { useDispatch } from "react-redux";
import { setCheckoutStep } from "../../../redux/TopUpSlice";
import { Button } from "../../editButton/modal/Button";

export const GoBack = () => {
  const dispatch = useDispatch();
  return (
    <Button
      text="&#8592; Go Back"
      handleClick={() => dispatch(setCheckoutStep(-1))}
    />
  );
};
