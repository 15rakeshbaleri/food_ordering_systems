import { Chip, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useSelector } from "react-redux";
import { useNavigate, useDispatch } from "react-router-dom";

function CartItem({ item }) {
  const { auth, cart } = useSelector((state) => state);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleremoveitem = () => {};
  const handleadditem = () => {};
  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover "
            src={item.food.images[0]}
            alt=""
          />
        </div>
        <div className="flex flex-center justify-between  lg:w-[70%]">
          <div className="space-y-1 lg:space-y-3 w-full">
            <p>{item.food.name}</p>
            <div className="flex  justify-between items-center">
              <div className="flex items-center space-x-1">
                <IconButton onClick={handleremoveitem}>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <div className="w-5 h-5 text-xs flex items-center justify-center">
                  {item.quantity}
                </div>
                <IconButton onClick={handleadditem}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <p>₹{item.totalPrice}/-</p>
        </div>
      </div>
      <div className="pt-3 space-x-2">
        {item.ingredients.map((ing_item) => (
          <Chip label={ing_item} />
        ))}
      </div>
    </div>
  );
}

export default CartItem;
