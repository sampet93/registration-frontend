// Render Prop
import { FormikHelpers, useFormik } from "formik";
import { TextField, Box, Button, Typography, Container } from "@mui/material";
import loginValidationSchema from "./Login.schema";
import React from "react";
import axios from "axios";

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

    axios
      .post("https://jsonplaceholder.typicode.com/posts", values)
      .then((response) => {
        console.log(response.data);
        helpers.setSubmitting(false);
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: loginValidationSchema,
  });

  return (
    <div>
      <React.Fragment>
        <form onSubmit={formik.handleSubmit}>
          <Container maxWidth="xs">
            <Typography variant="h5" fontWeight={600} sx={{ marginBottom: 2 }}>
              Sign in to platform
            </Typography>
            <TextField
              type="email"
              name="email"
              label="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
              sx={{ marginBottom: 1 }}
            />
            <TextField
              type="password"
              name="password"
              label="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <Button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
              variant="contained"
              onClick={() => onSubmit}
              fullWidth
            >
              Sign in
            </Button>
          </Container>
        </form>
      </React.Fragment>
    </div>
  );
};

export default Login;
