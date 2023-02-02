import { Formik, Form } from "formik";
import React from "react";

import { TopUpSchema } from "../../form/form data";
import { FormEntry } from "../../form/FormEntry";
import { useDispatch, useSelector } from "react-redux";

import {
  setCheckoutStep,
  setTopUpSimAmount,
  setTopUpSimNumber,
} from "../../../redux/TopUpSlice";
import { GoBack } from "./GoBack";
import { Button } from "../../sim_actions/modal/Button";

export const TopUpBalance: React.FC = () => {
  const dispatch = useDispatch();
  const checkoutStep = useSelector((s: any) => s.topUp.checkoutStep);

  return (
    <>
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
              <Button type="submit" text="Go to Invoice" />
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};
