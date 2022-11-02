import { Formik, Form } from "formik";
import React from "react";

import { TopUpSchema } from "../../form/form data";
import { FormEntry } from "../../form/FormEntry";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../general.styled";
import {
  setCheckoutStep,
  setTopUpSimAmount,
  setTopUpSimNumber,
} from "../../../redux/TopUpSlice";
import { StepProgress } from "./StepProgress";
import { GoBack } from "./GoBack";

export const TopUpBalance: React.FC = () => {
  const dispatch = useDispatch();
  const checkoutStep = useSelector((s: any) => s.topUp.checkoutStep);

  return (
    <>
      <StepProgress />
      {checkoutStep > 1 && <GoBack />}
      <Formik
        initialValues={{ sim: "", amount: "" }}
        validationSchema={TopUpSchema}
        onSubmit={(values) => {
          dispatch(setTopUpSimNumber(values.sim));
          dispatch(setTopUpSimAmount(values.amount));
          dispatch(setCheckoutStep(2));
        }}>
        {({ errors, touched }) => (
          <Form>
            <FormEntry inputfield="sim" errors={errors} touched={touched} />
            <FormEntry inputfield="amount" errors={errors} touched={touched} />
            {checkoutStep === 1 && (
              <Button type="submit">Go to Invoice </Button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};
