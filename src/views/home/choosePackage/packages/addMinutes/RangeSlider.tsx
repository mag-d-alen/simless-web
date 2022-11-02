import React from "react";

export const RangeSlider: React.FC<{ setDollars: (sum: number) => void }> = ({
  setDollars,
}) => {
  return (
    <div className="relative pt-1">
      <label className="form-label">הוסחף זמן אוויר</label>
      <input
        onChange={(e) => setDollars(parseInt(e.target.value))}
        type="range"
        min="0"
        max="50"
        step="5"
        className="
      form-range
      w-full
      h-6
      p-0
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none
    "
        id="customRange1"
      />
    </div>
  );
};
