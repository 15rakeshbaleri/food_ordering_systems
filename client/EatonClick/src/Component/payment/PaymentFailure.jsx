import React from "react";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function PaymentFailure() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="box w-full lg:w-1/4 flex flex-col items-center shadow-md rounded-md p-5">
        <DoNotDisturbIcon sx={{ color: "red", fontSize: "10rem" }} />
        <h1 className="text-3xl font-bold text-red-600 mt-4">Payment Failed</h1>
        <p className="text-center text-gray-500 mt-2">
          Unfortunately, your payment could not be processed. Please try again.
        </p>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: "2rem" }}
          onClick={() => navigate("/")}
        >
          Go Back to Home
        </Button>
      </div>
    </div>
  );
}

export default PaymentFailure;
