import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal, Box } from "@mui/material";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
const Style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

function Auth() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleonclose = () => {
    navigate("/");
  };
  return (
    <Modal
      onClose={handleonclose}
      open={
        location.pathname === "/account/login" ||
        location.pathname === "/account/register"
      }
    >
      <Box sx={Style}>
        {location.pathname === "/account/login" ? (
          <LoginForm />
        ) : (
          <RegisterForm />
        )}
      </Box>
    </Modal>
  );
}

export default Auth;
