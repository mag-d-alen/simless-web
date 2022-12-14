import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { EditButton } from "./EditButton";
import { DataIcon } from "./icons/DataIcon";
import { DateIcon } from "./icons/DateIcon";
import { PhoneIcon } from "./icons/PhoneIcon";
import { SimIcon } from "./icons/SimIcon";

export const EditButtons: React.FC<{
  showToast: (val: boolean) => void;
  openEditDialog: (val: { type: string; summary: string }) => void;

}> = ({ showToast, openEditDialog }) => {
  const {
    simNumber,
    simStartDate,
    selectedCountries,
    addedMinutesinUSD,
    addedData,
  } = useSelector((s: any) => s.simActions);
  



  return (
    <div className="flex flex-col align-center overflowY-hidden mt-4 py-4 text-gray-700 px-8">
      <EditButton
        showToast={showToast}
        handleClick={() =>
          openEditDialog({
            type: "number",
            summary: simNumber ? `${simNumber} מספר הסים` : "בחרו מספר סים",
          })
        }
        summary={simNumber ? `${simNumber} מספר סים` : "בחרו מספר סים"}
        icon={<SimIcon />}
      />
      <EditButton
        showToast={showToast}
        handleClick={() =>
          openEditDialog({
            summary: simStartDate
              ? `${simStartDate} תאריך הפעלת סים`
              : "בחרו תאריך הפעלת הסים",

            type: "date",
          })
        }
        summary={
          simStartDate
            ? `${simStartDate} תאריך הפעלת הסים`
            : "בחרו תאריך הפעלת הסים"
        }
        icon={<DateIcon />}
      />

      <EditButton
        showToast={showToast}
        handleClick={() =>
          openEditDialog({
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
        showToast={showToast}
        handleClick={() =>
          openEditDialog({
            type: "data",
            summary: addedData ? `${addedData}G הוספתם ` : " ?כמה תרצו לגלוש",
          })
        }
        summary={addedData ? `${addedData}G הוספתם ` : " ?כמה תרצו לגלוש"}
        icon={<DataIcon />}
      />
    </div>
  );
};
