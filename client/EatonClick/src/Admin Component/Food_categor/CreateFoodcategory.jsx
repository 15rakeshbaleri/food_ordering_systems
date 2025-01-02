import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";

const CreateFoodcategory = () => {
  const [FormData, setFormData] = useState({
    Category: "",
    restaurantId: "",
  });

  const handleinputchange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleSubmit = (e) => {
    const data = {
      Category: FormData.Category,
      restaurantId: 1,
    };
  };
  return (
    <div className="">
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Create Food Category
        </h1>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="Category"
            label="Category Name"
            variant="outlined"
            name="Category"
            value={FormData.Category}
            onChange={handleinputchange}
          />
        </form>
      </div>
    </div>
  );
};

export default CreateFoodcategory;
