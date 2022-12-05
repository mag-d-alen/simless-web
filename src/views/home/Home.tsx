import React, { useState } from "react";
import { useSelector } from "react-redux";

import { EditButton } from "../editButton/EditButton";
import { DateIcon } from "../editButton/icons/DateIcon";
import { EditDialogWrapper } from "../editButton/modal/EditDialogWrapper";
import { SimIcon } from "../editButton/icons/SimIcon";
import { TravelIcon } from "../editButton/icons/TravelIcon";
import { SelectedCountryType } from "../../data/types";
import { PhoneIcon } from "../editButton/icons/PhoneIcon";
import { DataIcon } from "../editButton/icons/DataIcon";

export const Home: React.FC = () => {
  const [openEditDialog, setOpenEditDialog] = useState<{
    type: string;
    summary: string;
  } | null>(null);

  const {
    simNumber,
    simStartDate,
    selectedCountries,
    addedMinutesinUSD,
    addedData,
  } = useSelector((s: any) => s.simActions);

  return (
    <>
      {!openEditDialog ? (
        <div className="flex flex-col align-center  bg-gray-100 text-gray-700 ">
          <EditButton
            handleClick={() =>
              setOpenEditDialog({
                type: "number",
                summary: simNumber
                  ? `${simNumber} מספר הסים`
                  : "תבחר מספר הסים",
              })
            }
            summary={simNumber ? `${simNumber} מספר הסים` : "תבחר מספר הסים"}
            icon={<SimIcon />}
          />
          <EditButton
            handleClick={() =>
              setOpenEditDialog({
                summary: simStartDate
                  ? `${simStartDate} תאריך הפעלת הסים`
                  : "תבחר תאריך הפעלת הסים",

                type: "date",
              })
            }
            summary={
              simStartDate
                ? `${simStartDate} תאריך הפעלת הסים`
                : "תבחר תאריך הפעלת הסים"
            }
            icon={<DateIcon />}
          />
          <EditButton
            handleClick={() =>
              setOpenEditDialog({
                type: "countries",
                summary: selectedCountries.length
                  ? `${selectedCountries.map(
                      (c: SelectedCountryType) => c.label
                    )}`
                  : " ? לאן אתם נוסעים ",
              })
            }
            summary={
              selectedCountries.length
                ? `${selectedCountries.map(
                    (c: SelectedCountryType) => c.label
                  )}`
                : " ? לאן אתם נוסעים "
            }
            icon={<TravelIcon />}
          />
          <EditButton
            handleClick={() =>
              setOpenEditDialog({
                type: "minutes",
                summary: addedMinutesinUSD
                  ? ` הוספת ${addedMinutesinUSD}$ זמן אוויר `
                  : " ?הלו, אמא",
              })
            }
            summary={
              addedMinutesinUSD
                ? ` הוספת ${addedMinutesinUSD}$ זמן אוויר `
                : " ?הלו, אמא"
            }
            icon={<PhoneIcon />}
          />
          <EditButton
            handleClick={() =>
              setOpenEditDialog({
                type: "data",
                summary: addedData ? `${addedData}G הוספת ` : " הוסיף דאטה",
              })
            }
            summary={addedData ? `${addedData}G הוספת ` : " הוסיף דאטה"}
            icon={<DataIcon />}
          />
        </div>
      ) : (
        <EditDialogWrapper
          dialogType={openEditDialog.type}
          summary={openEditDialog.summary}
          closeDialog={() => setOpenEditDialog(null)}
        />
      )}
    </>
  );
};
