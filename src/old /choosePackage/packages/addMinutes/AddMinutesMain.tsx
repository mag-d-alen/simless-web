import React, { useState } from "react";
import { DisplayMinutes } from "./DisplayMinutes";
import { RangeSlider } from "./RangeSlider";

export const AddMinutes = () => {
  const [dollars, setDollars] = useState<number>(0);
  return (
    <div className="flex-col">
      <RangeSlider setDollars={setDollars} />
      <DisplayMinutes dollars={dollars} />
    </div>
  );
};
