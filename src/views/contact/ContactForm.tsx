import { Formik, Form, Field } from "formik";
import React from "react";
import { ContactSchema } from "../form/form data";
import { FormEntry } from "../form/FormEntry";
import { FormTextArea } from "../form/FormTextArea";
import { splitAndCapitalize } from "../../data/splitAndCapitalize";
import { ContactFormInputType } from "../../data/types";
import { Button } from "../simActions/modal/Button";
import { FormMainContainer } from "../form/form.styled";
import { getHebrewVersion } from "../../data/getHebrewVersion";

export const ContactForm: React.FC<{
  handleSubmit: (values: ContactFormInputType) => void;
  status: "sending" | "submit";
}> = ({ handleSubmit, status }) => {
  return (
    <div className="flex content-center flex-col bg-white p-4 mt-2 w-full rounded">
      <Formik
        initialValues={{ name: "", email: "", message: "", phone: "" }}
        validationSchema={ContactSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
          
        }}>
        {({ errors, touched }) => (
          <Form>
            <FormEntry inputfield={"name"} errors={errors} touched={touched} />
            <FormEntry inputfield={"email"} errors={errors} touched={touched} />
            <FormEntry inputfield={"phone"} errors={errors} touched={touched} />
            <FormTextArea name={"message"} />
            <Button
              text={getHebrewVersion(status)}
              type="submit"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
