import React, { useEffect } from "react";
import Ordercard from "./Ordercard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserOrders } from "../State/Order/Action";
function Orders() {
  const { auth, Cart, order } = useSelector((state) => state);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    dispatch(getUserOrders({ jwt }));
  }, [auth.jwt, jwt]);
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-xl text-center py-7  font-semibold"> MY ORDERS</h1>
      <div className="space-y-5 w-full lg:w-1/2">
        {order.orders.map((Order) =>
          Order.items.map((item) => <Ordercard items={item} order={Order} />)
        )}
      </div>
    </div>
  );
}

export default Orders;
