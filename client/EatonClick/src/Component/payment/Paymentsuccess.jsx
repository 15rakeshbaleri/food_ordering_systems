import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Button from "@mui/material/Button"; // Corrected import
import { useNavigate } from "react-router-dom";

function Paymentsuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-5">
      <div className="flex flex-col items-center justify-center h-[90vh]">
        <div className="box w-full lg:w-1/4 flex flex-col items-center rounded-md">
          <TaskAltIcon sx={{ color: "green", fontSize: "10rem" }} />
          <h1 className="text-3xl font-bold text-green-600">Payment Success</h1>
          <p className="text-center text-gray-500">
            Thank you for choosing our Restaurant. Your order will be delivered
            soon.
          </p>
          <Button
            variant="contained"
            className="py-5"
            sx={{ margin: "2rem 0rem" }}
            onClick={() => navigate("/")} // Fixed navigate usage
          >
            Go To Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Paymentsuccess;
