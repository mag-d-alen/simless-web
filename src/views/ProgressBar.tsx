import React from "react";

export const ProgressBar: React.FC<{ value: number }> = ({ value }) => {
  console.log(value);
  return (
    <>
      <div className="flex justify-between mt-4 mx-4">
        <span className="text-xs  text-blue-700 dark:text-white">תשלום</span>
        <span className=" text-xs text-blue-700 dark:text-white">
          בחירת החבילה
        </span>
      </div>
      <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mx-4 mb-4">
        <div
          className="bg-purple-600 h-2.5 rounded-full"
          style={{ width: `${value}%` }}></div>
      </div>
    </>
  );
};
