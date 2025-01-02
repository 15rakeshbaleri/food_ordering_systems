import { useFormik } from "formik";
import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  IconButton,
  Button,
  TextField,
  OutlinedInput,
  Box,
  FormControl,
  InputLabel,
  Chip,
  Select,
  MenuItem,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import { uploadImagetoCloudnary } from "../util/uploadcloud";

function CreateMenuform() {
  const initialValues = {
    name: "",
    description: "",
    price: "",
    Category: "",
    restaurantId: "",
    vegitarian: "true",
    seasonal: "false",
    ingredients: [],
    images: [],
  };

  const [uploadImage, setUploadImage] = useState(false);

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      values.restaurantId = 1; // Add restaurantId dynamically if required
      console.log("Form data:", values);
    },
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadImage(true);
    const image = await uploadImagetoCloudnary(file);
    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadImage(false);
  };

  const handleremoveimg = (index) => {
    const updatedimages = [...formik.values.images];
    updatedimages.splice(index, 1);
    formik.setFieldValue("images", updatedimages);
  };

  return (
    <div className="py-10 px-5 lg:flex items-center justify-center min-h-screen">
      <div className="lg:max-w-4xl">
        <h1 className="font-bold text-2xl text-center py-2">
          Add New Menu Item
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <Grid container spacing={2}>
            {/* Image Upload */}
            <Grid item xs={12} lg={6} className="flex flex-wrap gap-5">
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <label htmlFor="fileInput" className="relative">
                <span className="w-24 h-24 flex justify-center items-center p-3 border rounded-md border-gray-600 cursor-pointer">
                  <AddPhotoAlternateIcon />
                </span>
                {uploadImage && (
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex justify-center items-center">
                    <CircularProgress />
                  </div>
                )}
              </label>
              <div className="flex flex-wrap object-cover">
                {formik.values.images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      className="w-24 h-24"
                      src={image}
                      alt={`Uploaded ${index}`}
                    />
                    <IconButton
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        outline: "none",
                      }}
                      onClick={() => handleremoveimg(index)}
                    >
                      <CloseIcon sx={{ fontSize: "1rem" }} />
                    </IconButton>
                  </div>
                ))}
              </div>
            </Grid>

            {/* Form Fields */}
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="name"
                label="Item Name"
                variant="outlined"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                label="Price"
                variant="outlined"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  value={formik.values.Category}
                  name="Category"
                  onChange={formik.handleChange}
                >
                  <MenuItem value="pizza">Pizza</MenuItem>
                  <MenuItem value="burger">Burger</MenuItem>
                  <MenuItem value="dose">Dose</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Ingredients */}
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel id="ingredients-label">Ingredients</InputLabel>
                <Select
                  labelId="ingredients-label"
                  name="ingredients"
                  multiple
                  value={formik.values.ingredients}
                  onChange={(event) =>
                    formik.setFieldValue("ingredients", event.target.value)
                  }
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Ingredients"
                    />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {["bread", "cheese", "tomato"].map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Boolean Fields */}
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel id="vegitarian-label">Vegetarian</InputLabel>
                <Select
                  labelId="vegitarian-label"
                  value={formik.values.vegitarian}
                  name="vegitarian"
                  onChange={formik.handleChange}
                >
                  <MenuItem value="true">True</MenuItem>
                  <MenuItem value="false">False</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel id="seasonal-label">Seasonal</InputLabel>
                <Select
                  labelId="seasonal-label"
                  value={formik.values.seasonal}
                  name="seasonal"
                  onChange={formik.handleChange}
                >
                  <MenuItem value="true">True</MenuItem>
                  <MenuItem value="false">False</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateMenuform;
