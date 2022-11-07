import React from "react";

export const RangeSlider: React.FC<{ setDollars: (sum: number) => void }> = ({
  setDollars,
}) => {
  return (
    <div className="flex-col align-center w-2/3 m-auto justify-center">
      <div className="flex justify-center align-center px-4 text-xs">
        הוסחיף זמן אוויר
      </div>
      <input
        onChange={(e) => setDollars(parseInt(e.target.value))}
        type="range"
        min="0"
        max="50"
        step="5"
        className="
      form-range
      px-0
      w-full
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none
    "
        id="customRange1"
      />
    </div>
  );
};
