import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
function Userprofile() {
  const handlelogout = () => {};
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
      <div className="flex flex-col items-center justify-center">
        <AccountCircleIcon sx={{ fontSize: "9rem" }} />
        <h1 className="py-5 text-2xl font-semibold "> "username"</h1>
        <p>emailid</p>
        <Button
          onClick={handlelogout}
          variant="outlined"
          sx={{ Margin: "2rem 0rem" }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Userprofile;
