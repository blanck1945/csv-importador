import { z } from "zod";

export const signupFormSchema = z.object({});

const handleSubmit = async (values) => {};

export const signupFormFormikProps = {
  initialValues: { email: "", password: "" },
  onSubmit: handleSubmit,
  //validationSchema: signupFormSchema,
};
