import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreateInvoiceMutation } from "../../redux/api/invoiceApi";
import { resetChosenDeal } from "../../redux/packagesSlice";
import {
  setCheckoutStep,
  resetUserInvoiceInfo,
  resetUserPaymentInfo,
} from "../../redux/TopUpSlice";
import { SuccessContainer } from "../balance/topup/topup.styled";
import { FailureIcon } from "./FailureIcon";
import { DialogContainer } from "./payment.styled";
import { SuccessIcon } from "./SuccessIcon";

export const PaymentResult: React.FC = () => {
  const { paymentSuccess } = useSelector((s: any) => s.topUp);
  const [isOpen, setIsOpen] = useState(true);
  const [createInvoice] = useCreateInvoiceMutation();
  const dispatch = useDispatch();
  return (
    <DialogContainer show={isOpen}>
      <SuccessContainer
        onClick={() => {
          setIsOpen(false);
          createInvoice({});
          dispatch(setCheckoutStep(1));
          dispatch(resetChosenDeal(""));
          dispatch(resetUserInvoiceInfo(null));
          dispatch(resetUserPaymentInfo(null));
        }}>
        {paymentSuccess ? (
          <>
            Success
            <SuccessIcon />
          </>
        ) : (
          <>
            There was a problem, try again
            <FailureIcon />
          </>
        )}
      </SuccessContainer>
    </DialogContainer>
  );
};
