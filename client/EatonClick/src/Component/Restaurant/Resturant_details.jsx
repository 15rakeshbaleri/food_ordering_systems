import React, { useEffect, useState } from "react";
import {
  Divider,
  FormControl,
  Grid,
  Radio,
  FormControlLabel,
  RadioGroup,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from "./MenuCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getRestaurantById,
  getRestaurantCategory,
} from "../../Component/State/Restaurant/Action";
import { getMenu_Itemsby_RestaurantID } from "../../Component/State/Menu/Action";

function Resturant_details() {
  const foodtypes = [
    { value: "vegetarian", label: "Vegetarian" },
    { value: "nonvegetarian", label: "Non-Vegetarian" },
    { value: "seasonal", label: "Seasonal" },
    { value: "all", label: "All" },
  ];
  const [foodtype, setFoodType] = useState("all");
  const [selectcategory, setSelectCategory] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { id } = useParams();
  const { restaurant, menu } = useSelector((state) => state);

  const handleFilter = (e) => {
    setFoodType(e.target.value);
  };

  const handleFiltercategory = (e) => {
    setSelectCategory(e.target.value);
  };

  useEffect(() => {
    dispatch(getRestaurantById({ jwt, restaurantById: id }));
    dispatch(getRestaurantCategory({ restaurantId: id, jwt }));
  }, [dispatch, jwt, id]);

  useEffect(() => {
    dispatch(
      getMenu_Itemsby_RestaurantID({
        jwt,
        resturantid: id,
        Veg: foodtype === "vegetarian",
        NonVeg: foodtype === "nonvegetarian",
        seasonal: foodtype === "seasonal",
        category: selectcategory,
      })
    );
  }, [dispatch, jwt, id, foodtype, selectcategory]);

  if (!restaurant || !restaurant.restaurant) {
    return <div>Loading or no restaurant data available...</div>;
  }

  return (
    <div className="px-0 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-0">
          Home / Country / Restaurant / {id}
        </h3>
        <div className="pt-3 pb-5 mb-5">
          <h1 className="text-4xl font-semibold">
            {restaurant.restaurant.name}
          </h1>
          <p className="text-gray-500 mt-3">
            {restaurant.restaurant.description}
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>{`${restaurant.restaurant.address.streetAddress}, ${restaurant.restaurant.address.city}, ${restaurant.restaurant.stateProvince}`}</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>{restaurant.restaurant.openingHours}</span>
            </p>
          </div>
        </div>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={10} lg={6}>
              <img
                className="w-full h-[20rem]"
                src={restaurant.restaurant.images[0]}
                alt="Restaurant Banner"
              />
            </Grid>
            <Grid item xs={10} lg={6}>
              <img
                className="w-full h-[20rem]"
                src={restaurant.restaurant.images[1]}
                alt="Dish"
              />
            </Grid>
          </Grid>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-3 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  name="food_type"
                  value={foodtype}
                  onChange={handleFiltercategory}
                >
                  {foodtypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  name="food_category"
                  value={selectcategory}
                  onChange={handleFiltercategory}
                >
                  {restaurant.categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item.name}
                      control={<Radio />}
                      label={item.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-10 lg:w-[80%] filter lg:pl-10">
          <h2 className="text-2xl font-semibold">Menu</h2>
          {menu.menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resturant_details;
