import React from "react";
import { Form, Formik, Field } from "formik";
import { signupFormFormikProps } from "../forms/signup.form";

const Signup = () => {
  return (
    <Formik {...signupFormFormikProps}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;
