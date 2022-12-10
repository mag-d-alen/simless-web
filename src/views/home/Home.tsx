import React, { useState } from "react";
import { useSelector } from "react-redux";

import { EditButton } from "../editButton/EditButton";
import { DateIcon } from "../editButton/icons/DateIcon";
import { EditDialogWrapper } from "../editButton/modal/EditDialogWrapper";
import { SimIcon } from "../editButton/icons/SimIcon";
import { SelectedCountryType } from "../../data/types";
import { PhoneIcon } from "../editButton/icons/PhoneIcon";
import { DataIcon } from "../editButton/icons/DataIcon";
import { EditSelectCountry } from "../editButton/modal/EditSelectCountry";
import { SelectCountry } from "./SelectCountry";
import { Toast } from "../editButton/icons/Toast";

export const Home: React.FC = () => {
  const [openEditDialog, setOpenEditDialog] = useState<{
    type: string;
    summary: string;
  } | null>(null);
  const [showToast, setShowToast] = useState(false);
  const {
    simNumber,
    simStartDate,
    selectedCountries,
    addedMinutesinUSD,
    addedData,
  } = useSelector((s: any) => s.simActions);

  return (
    <>
      <SelectCountry />
      {!openEditDialog ? (
        <>
          {showToast ? (
            <Toast
              text={"חבר מדינת היעד"}
              closeToast={() => setShowToast(false)}
            />
          ) : null}
          <div className="flex flex-col align-center overflowY-hidden bg-gray-100 text-gray-700 px-8">
            <EditButton
              handleClick={() =>
                !selectedCountries.length
                  ? setShowToast(true)
                  : setOpenEditDialog({
                      type: "number",
                      summary: simNumber
                        ? `${simNumber} מספר הסים`
                        : "בחרו מספר סים",
                    })
              }
              summary={simNumber ? `${simNumber} מספר סים` : "בחרו מספר סים"}
              icon={<SimIcon />}
            />
            <EditButton
              handleClick={() =>
                !selectedCountries.length
                  ? setShowToast(true)
                  : setOpenEditDialog({
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
              disabled={!selectedCountries.length}
              handleClick={() => {
                !selectedCountries.length
                  ? setShowToast(true)
                  : setOpenEditDialog({
                      type: "minutes",
                      summary: addedMinutesinUSD
                        ? ` הוספת ${addedMinutesinUSD}$ זמן אוויר `
                        : " ?הלו, אמא",
                    });
              }}
              summary={
                addedMinutesinUSD
                  ? ` הוספת ${addedMinutesinUSD}$ זמן אוויר `
                  : " ?הלו, אמא"
              }
              icon={<PhoneIcon />}
            />
            <EditButton
              // disabled={!selectedCountries.length}
              handleClick={() => {
                !selectedCountries.length
                  ? setShowToast(true)
                  : setOpenEditDialog({
                      type: "data",
                      summary: addedData
                        ? `${addedData}G הוספתם `
                        : " ?כמה תרצו לגלוש",
                    });
              }}
              summary={addedData ? `${addedData}G הוספתם ` : " ?כמה תרצו לגלוש"}
              icon={<DataIcon />}
            />
          </div>
        </>
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
