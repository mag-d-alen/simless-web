import { Formik, Field, Form } from "formik";
import React from "react";
import { initialData, InvoiceSchema } from "./form data";
import { FormEntry } from "./FormEntry";
import { InvoiceType } from "../../data/types";
import { Button } from "../sim_actions/modal/Button";
import { GoBack } from "../balance/topup/GoBack";

export const InvoiceForm: React.FC<{
  handleSubmit: (values: InvoiceType) => void;
  oneForm: boolean;
}> = ({ handleSubmit, oneForm }) => {
  return (
    <Formik
      initialValues={initialData}
      validationSchema={InvoiceSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}>
      {({ errors, touched, values, setValues }) => (
        <Form className="flex flex-col flex-wrap w-full ">
          {oneForm ? (
            <div className="flex text-xs uppercase gap-4 px-8  mb-4 text-gray-500">
              <Field type="checkbox" name="oneForm" inputfield={"oneForm"} />
              Use the same address for payment
            </div>
          ) : null}

          <FormEntry
            inputfield={"first_Name"}
            errors={errors}
            touched={touched}
          />
          <FormEntry
            inputfield={"last_Name"}
            errors={errors}
            touched={touched}
          />
          <FormEntry inputfield={"company"} errors={errors} touched={touched} />
          <FormEntry inputfield={"email"} errors={errors} touched={touched} />
          <FormEntry inputfield={"sim"} errors={errors} touched={touched} />
          <FormEntry inputfield={"phone"} errors={errors} touched={touched} />
          <FormEntry
            inputfield={"identity_No"}
            errors={errors}
            touched={touched}
          />
          {/* <FormEntry
              inputfield={"street"}
              errors={errors}
              touched={touched}
            />
           
            <FormEntry
              inputfield={"additional_Phone"}
              errors={errors}
              touched={touched}
            />
            <FormEntry inputfield={"city"} errors={errors} touched={touched} />

            <FormEntry
              inputfield={"country"}
              errors={errors}
              touched={touched}
              values={values}
              setValues={setValues}
            /> */}

          <Button handleClick={() => {}} text="Submit" type="submit" />
        </Form>
      )}
    </Formik>
  );
};
