import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../sim_actions/modal/Button";
import { PaymentDialog } from "./PaymentDialog";

export const PaymentMain: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button handleClick={() => setDialogOpen(true)} text="Proceed to Payment"/>
      {dialogOpen ? (
        <PaymentDialog isOpen={dialogOpen} close={() => setDialogOpen(false)} />
      ) : null}
    </>
  );
};
