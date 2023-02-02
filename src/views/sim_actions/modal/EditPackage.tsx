import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { useGetPackagesQuery } from "../../../redux/api/packagesApi";
import { AvailablePackages } from "../../availablePackages/AvailablePackages";
import { setChosenPackage } from "../../../redux/SimActionsSlice";
import { ModalButton } from "./ModalButton";
import { countriesNamesList } from "../../../data/list_iso3166_a3";
import { setSelectedCountries } from "../../../redux/SimActionsSlice";
import { useState } from "react";

export const EditPackage: React.FC<{
  closeDialog: () => void;
}> = ({ closeDialog }) => {
  const dispatch = useDispatch();
  const [packageSelected, setPackageSelected] = useState<number | null>(null);
  const { selectedCountries } = useSelector((s: any) => s.simActions);
  const { isLoading } = useGetPackagesQuery(selectedCountries);

  return (
    <div className="flex flex-col justify-center px-8 mx-1 mt-4">
      <div className="mb-4">
        <Select
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              borderColor: "#a854f7",
              padding: "12px 6px",
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
          placeholder={"?לאן אתם נוסעים"}
          options={countriesNamesList}
          isMulti={true}
          value={selectedCountries}
          onChange={(selected) => dispatch(setSelectedCountries(selected))}
        />
      </div>

      {isLoading ? <div>Loading...</div> : <AvailablePackages />}
      {selectedCountries.length ? (
        <div className="flex flex-col mb-4 ">
          <h2 className="flex text-md justify-center uppercase text-purple-600">
            :תוכלו להישתמש בשים ב
          </h2>

          {selectedCountries.map((c: any) => (
            <span key={c.value} className="flex text-sm justify-center ">
              {c.label}
            </span>
          ))}
        </div>
      ) : null}

      <ModalButton
        clickHandler={() => {
          if (packageSelected) dispatch(setChosenPackage(packageSelected));
          closeDialog();
        }}
      />
    </div>
  );
};
