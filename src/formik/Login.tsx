// Render Prop
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

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
      <h1>Login</h1>
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
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
