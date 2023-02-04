import React, { useState } from "react";
import { resetSimOrder, setSimOrder } from "../../redux/SimActionsSlice";
import { Button } from "./modal/Button";
import { useDispatch, useSelector } from "react-redux";

export const SubmitButtons: React.FC = () => {
  const dispatch = useDispatch();
  const [addedSim, setAddedSim] = useState(false);
  const { simNumber, simStartDate, addedMinutesInUSD, chosenPackage, newSim } =
    useSelector((s: any) => s.simActions);

  const addSimOrder = () => {
    dispatch(
      setSimOrder({
        simNumber,
        simStartDate,
        addedMinutesInUSD,
        chosenPackage,
        newSim,
      })
    );
    setAddedSim(!addedSim);
  };
  return (
    <div className="flex items-center w-full py-4 ">
      {addedSim ? (
        <>
          <Button
            text="הוסיפו סים נוסף"
            handleClick={() => {
              dispatch(resetSimOrder(true));
              setAddedSim(!addedSim);
            }}
          />
          <Button
            text="המשיכו לתשום"
            handleClick={() => dispatch(resetSimOrder(true))}
          />
        </>
      ) : newSim || simNumber ? (
        <Button text="הוסיפו סים " handleClick={addSimOrder} />
      ) : null}
    </div>
  );
};
