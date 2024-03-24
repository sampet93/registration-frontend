// Render Prop
import { Formik, Form, ErrorMessage, FormikHelpers } from "formik";
import { TextField, Box, Button, Typography } from "@mui/material";

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};

interface OwnProps {}

const Login = ({}: OwnProps) => {
  const onSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) => {
    console.log({ values, helpers });
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      helpers.setSubmitting(false), 1000;
    });
  };

  const validate = (values: FormValues) => {};

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography variant="h4">Login</Typography>
              <TextField type="email" name="email" label="Email" fullWidth />
              <ErrorMessage name="email" component="div" />
              <TextField
                type="password"
                name="password"
                label="Password"
                fullWidth
              />
              <ErrorMessage name="password" component="div" />
              <Button type="submit" disabled={isSubmitting} variant="contained">
                Login
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
