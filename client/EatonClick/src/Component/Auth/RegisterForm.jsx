import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { registerUser } from "../State/Authentication/Action";
const ROLE_ADMIN = "ROLE_ADMIN";
const ROLE_CUSTOMER = "ROLE_CUSTOMER";
const ROLE_RESTAURANT_OWNER = "ROLE_RESTAURANT_OWNER";

function RegisterForm() {
  const initialValues = {
    fullname: "",
    role: "",
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(registerUser({ userData: values, navigate }));
  };

  return (
    <div>
      <Typography variant="h5" align="center">
        Register
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ values, setFieldValue }) => (
          <Form>
            <Field
              as={TextField}
              name="fullname"
              label="Full Name"
              variant="outlined"
              margin="normal"
              fullWidth
            />

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

            <FormControl fullWidth margin="normal">
              <InputLabel id="role-select-label">Role</InputLabel>
              <Field
                name="role"
                as={Select}
                labelId="role-select-label"
                value={values.role}
                label="Role"
                onChange={(e) => setFieldValue("role", e.target.value)}
              >
                <MenuItem value={ROLE_ADMIN}>ROLE ADMIN</MenuItem>
                <MenuItem value={ROLE_CUSTOMER}>ROLE CUSTOMER</MenuItem>
                <MenuItem value={ROLE_RESTAURANT_OWNER}>ROLE OWNER</MenuItem>
              </Field>
            </FormControl>

            <Button
              sx={{ mt: 2, padding: "1rem" }}
              fullWidth
              type="submit"
              variant="contained"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Already have an account?{" "}
        <Button
          size="small"
          onClick={() => {
            navigate("/account/login");
          }}
        >
          Login
        </Button>
      </Typography>
      <div className="h-10 ">
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
    </div>
  );
}

export default RegisterForm;
