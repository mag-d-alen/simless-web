import { Formik, Form } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { simApi, useGetSimBalanceQuery } from "../../../redux/api/simApi";
import { store } from "../../../redux/store";
import { setSimData, setUserSimNumber } from "../../../redux/UserInfoSlice";
import { CheckBalanceSchema } from "../../form/form data";
import { FormEntry } from "../../form/FormEntry";
import { Button } from "../../general.styled";


export const CheckBalance = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{ sim: "" }}
        validationSchema={CheckBalanceSchema}
        onSubmit={(values) => {
          dispatch(setUserSimNumber(values.sim));
        }}>
        {({ errors, touched }) => (
          <Form>
            <FormEntry inputfield="sim" errors={errors} touched={touched} />
            <Button type="submit">Check your balance</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
