import React from "react";
import { splitAndCapitalize } from "../../../../data/splitAndCapitalize";
import { useSelector } from "react-redux";

export const Package: React.FC<{
  simPackage: any;
  choose: (pack: any) => void;
}> = ({ simPackage, choose }) => {
  const { chosenPackage } = useSelector((s: any) => s.simActions);

  return (
    <div
      className={`flex p-2 flex-col items:center rounded-lg shadow-sm shadow hover:shadow-lg m-4 p-4 ${
        chosenPackage?.id === simPackage?.id ? " border-2 border-purple-300" : null
      }`}
      onClick={() => choose(simPackage)}>
      <div className="flex justify-center text-purple-400">
        {splitAndCapitalize(simPackage.name)}
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center text-purple-700 font-extrabold ">
          {simPackage.gb}GB
        </div>
        <div className="flex flex-col">
          {simPackage.countriesData.map(
            (country: { label: string; minutes: number }) => (
              <div className="flex flex-row text-sm" key={country.label}>
                <p>
                  {country.minutes}
                  min{" : "}
                </p>
                <p>שיחה ב{country.label}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
