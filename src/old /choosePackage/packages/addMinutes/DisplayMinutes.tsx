import React from "react";

export const DisplayMinutes: React.FC<{ dollars: number }> = ({ dollars }) => {
  return (
    <div className="flex-col align-center text-xs">
      <div className="flex justify-center">{dollars}$ הוספת </div>;
      <div className="flex justify-center">
        כל דולר הוא זמן שיחה במידנת היעד
      </div>
    </div>
  );
};
