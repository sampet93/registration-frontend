import * as Yup from "yup";

const loginValidationSchema = Yup.object({
  password: Yup.string()
    .strict(true)
    .required("Password is required!"),
  email: Yup.string()
    .strict(true)
    .email("Invalid Email Address!")
    .required("Email Address is required!"),
});

export default loginValidationSchema;