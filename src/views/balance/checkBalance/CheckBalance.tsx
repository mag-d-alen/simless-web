import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { setUserSimNumber } from "../../../redux/CheckBalanceSlice";
import { Button } from "../../sim_actions/modal/Button";
import { CheckBalanceSchema } from "../../form/form data";
import { FormEntry } from "../../form/FormEntry";

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
            <Button
              text="Check your balance"
              handleClick={() => {}}
              type="submit"
            />
          </Form>
        )}
      </Formik>
    </>
  );
};
