import React, { useState } from "react";
import { resetSimOrder, setSimOrder } from "../../redux/SimActionsSlice";
import { Button } from "./modal/Button";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "../cart/Cart";
import { v4 as uuidv4 } from "uuid";

export const SubmitButtons: React.FC<{
  updateShowCart: (val: boolean) => void;
  showCart: boolean;
}> = ({ showCart, updateShowCart }) => {
  const dispatch = useDispatch();
  const [addedSim, setAddedSim] = useState(false);
  const { simNumber, simStartDate, addedMinutesInUSD, chosenPackage, newSim } =
    useSelector((s: any) => s.simActions);

  const addSimOrder = () => {
    dispatch(
      setSimOrder({
        id: uuidv4(),
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
    <div className="flex items-center justify-center w-full xs:gap-2 flex-row flex-wrap py-4 ">
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
            text="המשיכו לתשלום"
            handleClick={() => {
              dispatch(resetSimOrder(true));
              updateShowCart(true);
            }}
          />
        </>
      ) : newSim || simNumber ? (
        <Button text="הוסיפו סים " handleClick={addSimOrder} />
      ) : null}
      {showCart ? <Cart closeDialog={() => updateShowCart(false)} /> : null}
    </div>
  );
};
