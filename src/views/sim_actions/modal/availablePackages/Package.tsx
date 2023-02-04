import React from "react";
import { splitAndCapitalize } from "../../../../data/splitAndCapitalize";
import { SimPackageType } from "../../../../data/types";

export const Package: React.FC<{
  simPackage: SimPackageType;
  choose: (pack: SimPackageType) => void;
  chosen: boolean;
}> = ({ simPackage, choose, chosen }) => {
  return (
    <div
      className={`flex p-2 flex-col rounded-lg shadow-sm shadow hover:shadow-lg m-4 p-4 ${
        chosen ? " border-2 border-purple-300" : null
      }`}
      onClick={() => choose(simPackage)}>
      <div className="flex justify-center  text-purple-400">
        {splitAndCapitalize(simPackage.name)}
      </div>
      <div className="flex flex-row gap-4 mx-4 mt-2">
        <div className="flex flex-col justify-center text-purple-500  text-2xl font-extrabold ">
          {simPackage.gb}GB
        </div>
        <div className="flex flex-col text-right ml-auto" id="resh">
          :רשימה המדינות שבהן החבילה תפעל{" "}
          {simPackage.countries.map((country: string) => (
            <div className="flex flex-col text-sm" id="counn" key={country}>
              {country}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
