import React, { useState } from "react";
import { AddMinutesContainer } from "./addMinutesStyled";
import { DisplayMinutes } from "./DisplayMinutes";
import { RangeSlider } from "./RangeSlider";

export const AddMinutes = () => {
  const [dollars, setDollars] = useState<number>(0);
  return (
    <AddMinutesContainer>
      <RangeSlider setDollars={setDollars} />
      <DisplayMinutes dollars={dollars} />
    </AddMinutesContainer>
  );
};
