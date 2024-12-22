import React from "react";
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
function Resturant_details() {
  const foodcategory = ["pizza", "burger", "pasta", "chinese", "italian"];
  const foodtypes = [
    { label: "Veg", value: "veg" },
    { label: "Non-Veg", value: "nonveg" },
    { label: "All", value: "all" },
    { label: "Seasonal", value: "seasonal" },
  ];

  const menu = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  const [foodtype, setFoodtype] = React.useState("all");
  const [foodcategoryFilter, setFoodcategoryFilter] = React.useState("");

  const handleFilter = (e) => {
    const { name, value } = e.target;
    if (name === "food_type") setFoodtype(value);
    if (name === "food_category") setFoodcategoryFilter(value);
    console.log(name, value);
  };

  return (
    <>
      <div className="px-5 lg:px-20">
        <section>
          <h3 className="text-gray-500 py-2 mt-10">
            Home / Country / Restaurant / r_id
          </h3>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img
                  className="w-full h-[20rem]"
                  src="https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Restaurant Banner"
                />
              </Grid>
              <Grid item xs={10} lg={6}>
                <img
                  className="w-full h-[20rem]"
                  src="https://images.pexels.com/photos/13869902/pexels-photo-13869902.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="Dish"
                />
              </Grid>
              <Grid item xs={10} lg={6}>
                <img
                  className="w-full h-[20rem]"
                  src="https://images.pexels.com/photos/13869902/pexels-photo-13869902.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="Dish"
                />
              </Grid>
            </Grid>
          </div>
          <div className="pt-3 pb-5">
            <h1 className="text-4xl font-semibold">Restaurant Name</h1>
            <p className="text-gray-500 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, iure?
            </p>
            <div className="space-y-3 mt-3">
              <p className="text-gray-500 flex items-center gap-3">
                <LocationOnIcon />
                <span>Location, State</span>
              </p>
              <p className="text-gray-500 flex items-center gap-3">
                <CalendarTodayIcon />
                <span>Mon-Sun 9:00am-9:00pm</span>
              </p>
            </div>
          </div>
        </section>
        <Divider />
        <section className="pt-[2rem] lg:flex relative">
          <div className="space-y-10 lg:w-[20%] filter ">
            <div className="box space-y-3 lg:sticky top-28">
              <div>
                <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                  Food Type
                </Typography>
                <FormControl component="fieldset">
                  <RadioGroup
                    name="food_type"
                    value={foodtype}
                    onChange={handleFilter}
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
                    value={foodcategoryFilter}
                    onChange={handleFilter}
                  >
                    {foodcategory.map((item) => (
                      <FormControlLabel
                        key={item}
                        value={item}
                        control={<Radio />}
                        label={item}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="space-y-10 lg:w-[80%] filter lg:pl-10">
            <h2 className="text-2xl font-semibold">Menu</h2>

            {menu.map((item) => (
              <MenuCard />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Resturant_details;
