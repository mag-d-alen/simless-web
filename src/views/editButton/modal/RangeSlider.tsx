import React from "react";

export const RangeSlider: React.FC<{ setDollars: (sum: number) => void }> = ({
  setDollars,
}) => {
  return (
    <div className="flex-col align-center m-auto justify-center">
      <div className="flex justify-center align-center px-4 text-xs">
        הוסף זמן אוויר
      </div>
      <div className="flex p-4">
        <div className="control-minus">0$</div>
        <input
          onChange={(e) => setDollars(parseInt(e.target.value))}
          type="range"
          min="0"
          max="50"
          step="5"
          defaultValue={0}
          className="
      form-range
      accent-purple-600
      rounded-lg
      h-2
      px-0
      w-full
      bg-purple-200
      appearance-none
      cursor-pointer 
      focus:outline-none focus:ring-0 focus:shadow-none
    "
          id="customRange1"
        />
        <div className="control-plus">50$</div>
      </div>
    </div>
  );
};
