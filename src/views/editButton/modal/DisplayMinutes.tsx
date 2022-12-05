import React from "react";

export const DisplayMinutes: React.FC<{ dollars: number }> = ({ dollars }) => {
  return (
    <label
      htmlFor="default-range"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      <div className="flex-col align-center ">
        <h1 className="flex justify-center text-2xl p-4">{dollars}$ הוספת </h1>;
        <h2 className="flex justify-center">
          כל דולר הוא זמן שיחה במדינת היעד
        </h2>
      </div>
    </label>
  );
};
