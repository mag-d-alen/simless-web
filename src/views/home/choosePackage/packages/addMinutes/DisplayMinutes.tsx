import React from "react";
import { AddMinutesContainer } from "./addMinutesStyled";

export const DisplayMinutes: React.FC<{ dollars: number }> = ({ dollars }) => {
  return <AddMinutesContainer>{dollars}$ הוספת </AddMinutesContainer>;
};
