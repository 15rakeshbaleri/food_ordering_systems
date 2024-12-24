import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
function Ordercard() {
  return (
    <div>
      <Card className="flex justify-between items-center   p-5">
        <div className="flex items-center space-x-5">
          <img
            className="h-16 w-16"
            src="https://media.istockphoto.com/id/1430345748/photo/biryani-overhead-view.jpg?b=1&s=612x612&w=0&k=20&c=nfBtNMGwM2nyERgBTYnimSQkGhQx-iHVIALy0EZSIA4="
            alt=""
          />
          <div>
            <p>Biryani</p>
            <p>$400</p>
          </div>
        </div>
        <div>
          <Button className="cursor-not-allowed">status</Button>
        </div>
      </Card>
    </div>
  );
}

export default Ordercard;
