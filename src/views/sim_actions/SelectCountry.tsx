import { useDispatch } from "react-redux";
import Select from "react-select";
import { countriesNamesList } from "../../data/list_iso3166_a3";
import { setSelectedCountries } from "../../redux/SimActionsSlice";

export const SelectCountry: React.FC = () => {
  const dispatch = useDispatch();
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
          onChange={(selected) => dispatch(setSelectedCountries(selected))}
        />
      </div>
    </div>
  );
};
