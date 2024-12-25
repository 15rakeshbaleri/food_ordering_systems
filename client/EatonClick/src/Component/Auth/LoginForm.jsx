import React from "react";
import { Formik, Form, Field } from "formik";
import { Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../State/Authentication/Action";
const initialValues = {
  email: "",
  password: "",
};

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(loginUser({ userData: values, navigate }));
  };

  return (
    <div>
      <Typography variant="h5" align="center">
        Login
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {() => (
          <Form>
            <Field
              as={TextField}
              name="email"
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
            />

            <Field
              as={TextField}
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
            />

            <Button
              sx={{ mt: 2, padding: "1rem" }}
              fullWidth
              type="submit"
              variant="contained"
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>

      {/* Register Link */}
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Don't have an account?
        <Button
          onClick={() => {
            navigate("/account/register");
          }}
        >
          Register
        </Button>
      </Typography>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        <Button
          size="small"
          onClick={() => {
            navigate("/account/forgotpassword");
          }}
        >
          forgotpassword
        </Button>
      </Typography>
    </div>
  );
}

export default LoginForm;
