import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select, { SingleValue } from "react-select";
import { GBOptions } from "../../../data/data";
import { setAddedData } from "../../../redux/SimActionsSlice";
import { ModalButtons } from "./ModalButtons";

export const EditData: React.FC<{
  closeDialog: () => void;
}> = ({ closeDialog }) => {
  const dispatch = useDispatch();
  const [gbSelected, setGbSelected] = useState<SingleValue<{
    value: number;
    label: string;
  }> | null>(null);

  return (
    <>
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor:
              state.isFocused || state.menuIsOpen
                ? "grey"
                : "rgba(168, 84, 247, 0.644)",
          }),
          menu: (baseStyles, state) => ({
            ...baseStyles,
            background: "rgba(168, 84, 247, 0.307)",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            background:
              state.isSelected || state.isFocused
                ? state.isSelected
                  ? "rgba(168, 84, 247, 0.644)"
                  : "rgba(168, 84, 247, 0.213)"
                : "white",
          }),
        }}
        options={GBOptions}
        isMulti={false}
        onChange={(selected) => {
          setGbSelected(selected);
        }}
      />

      <ModalButtons
        closeDialog={closeDialog}
        clickHandler={() => {
          if (gbSelected) dispatch(setAddedData(gbSelected.value));
        }}
      />
    </>
  );
};
