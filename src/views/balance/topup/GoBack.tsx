import React from "react";
import { useDispatch } from "react-redux";
import { setCheckoutStep } from "../../../redux/TopUpSlice";
import { Button } from "../../general.styled";


export const GoBack = () => {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(setCheckoutStep(-1))}>
      &#8592; Go Back
    </Button>
  );
};
