import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
function Ordercard({ items, order }) {
  return (
    <div>
      <Card className="flex justify-between items-center   p-5">
        <div className="flex items-center space-x-5">
          <img className="h-16 w-16" src={items.food.images[0]} alt="" />
          <div>
            <p>{items.food.restaurant.name}</p>
            <p>₹{items.totalPrice}</p>
          </div>
        </div>
        <div>
          <Button className="cursor-not-allowed">{order.orderStatus}</Button>
        </div>
      </Card>
    </div>
  );
}

export default Ordercard;
