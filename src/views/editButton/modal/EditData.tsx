import { onFocus } from "@reduxjs/toolkit/dist/query/core/setupListeners";
import React, { useState } from "react";
import Select, { SingleValue } from "react-select";
import { isSet } from "util/types";
import { GBOptions } from "../../../data/data";
import { ChevronDown } from "../icons/ChevronDown";
import { ModalButtons } from "./ModalButtons";

export const EditData: React.FC<{
  closeDialog: () => void;
}> = ({ closeDialog }) => {
  const [gbSelected, setGbSelected] = useState<SingleValue<{
    value: string;
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
      {/* <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        type="button">
        Dropdown button <ChevronDown />
      </button> */}

      {/* <div
        id="dropdown"
        className=" z-10 w-full bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault">
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Sign out
            </a>
          </li>
        </ul>
      </div> */}
      <ModalButtons closeDialog={closeDialog} clickHandler={closeDialog} />
    </>
  );
};
