import React from "react";
import {
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Ordertable from "./Ordertable";

const orderStatus = [
  { label: "pending", value: "pending" },
  { label: "delivered", value: "delivered" },
  { label: "all", value: "all" },
];

function Orders() {
  const [filterValue, setfiltervalue] = useState("");
  const handlefilter = (e, value) => {
    setfiltervalue(value);
  };
  return (
    <div className="px-2">
      <Card className="p-5">
        <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
          order status
        </Typography>
        <FormControl>
          <RadioGroup
            onChange={handlefilter}
            row
            name="category"
            value={filterValue || "all"}
          >
            {orderStatus.map((item) => (
              <FormControlLabel
                key={item.value}
                value={item.value}
                control={<Radio />}
                label={item.label}
                sx={{ color: "gray" }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Card>
      <Ordertable />
    </div>
  );
}

export default Orders;
