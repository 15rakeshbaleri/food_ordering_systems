import React from "react";
import { Card, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

function AddressCard({ item, showButton, handleselectedAddress }) {
  return (
    <Card className="flex gap-5 w-64 p-5">
      <HomeIcon />
      <div className="space-y-3 text-gray-500">
        <h1 className="font-semibold text-lg text-gray-500">Home</h1>
        <p>Address: Lorem ipsum dolor sit.</p>
        {showButton && (
          <Button
            variant="outlined"
            onClick={() => {
              handleselectedAddress();
            }}
          >
            Select
          </Button>
        )}
      </div>
    </Card>
  );
}

export default AddressCard;
