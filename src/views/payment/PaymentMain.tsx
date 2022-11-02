import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../general.styled";
import { PaymentDialog } from "./PaymentDialog";

export const PaymentMain: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setDialogOpen(true)}>Proceed to payment</Button>
      {dialogOpen ? (
        <PaymentDialog isOpen={dialogOpen} close={() => setDialogOpen(false)} />
      ) : null}
    </>
  );
};
