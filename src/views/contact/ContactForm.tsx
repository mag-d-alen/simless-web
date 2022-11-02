
import { Formik, Form, Field } from "formik";
import React from "react";
import { ContactSchema } from "../form/form data";
import { FormEntry } from "../form/FormEntry";
import { FormTextArea } from "../form/FormTextArea";
import { Button } from "../general.styled";
import { splitAndCapitalize } from "../../data/splitAndCapitalize";
import { ContactFormInputType } from "../../data/types";

export const ContactForm: React.FC<{
         handleSubmit: (values: ContactFormInputType) => void;
         status: "Sending..." | "Submit";
       }> = ({ handleSubmit, status }) => {
         return (
           <Formik
             initialValues={{ name: "", email: "", message: "", phone:"" }}
             validationSchema={ContactSchema}
             onSubmit={(values, { resetForm }) => {
               handleSubmit(values);
               resetForm();
             }}>
             {({ errors, touched }) => (
               <Form>
                 <FormEntry
                   inputfield={"name"}
                   errors={errors}
                   touched={touched}
                 />
                 <FormEntry
                   inputfield={"email"}
                   errors={errors}
                   touched={touched}
                 />
                 <FormEntry
                   inputfield={"phone"}
                   errors={errors}
                   touched={touched}
                 />
                 <FormTextArea name={"message"} />
                 <Button type="submit">{splitAndCapitalize(status)}</Button>
               </Form>
             )}
           </Formik>
         );
       };
