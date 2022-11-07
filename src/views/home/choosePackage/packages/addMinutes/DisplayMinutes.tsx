import React from "react";
import { AddMinutesContainer } from "./addMinutesStyled";

export const DisplayMinutes: React.FC<{ dollars: number }> = ({ dollars }) => {
  return <div className="flex justify-center text-xs">{dollars}$ הוספת </div>;
};
