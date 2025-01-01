import { useFormik } from "formik";
import React, { useState } from "react";
import { Grid, CircularProgress, IconButton } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
function CreateRestaurant() {
  const initialValues = {
    name: "",
    description: "",
    cuisineTypes: "",
    streetAddress: "",
    city: "",
    stateProvince: "",
    phone: "",
    postcode: "",
    email: "",
    country: "",
    instagram: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    openingHours: "mon-sun: 9am-12pm",
    images: [],
  };

  const [uploadImage, setUploadImage] = useState(false);

  const onSubmit = (values) => {
    console.log("Form data:", values);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUploadImage(true);
    const image = uploadImagetoCloudnary(file);
  };

  const handleremoveimg = (index) => {};

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const data = {
        name: values.name,
        description: values.description,
        cuisineTypes: values.cuisineTypes,
        address: {
          streetAddress: values.streetAddress,
          city: values.city,
          stateProvince: values.stateProvince,
          postcode: values.postcode,
          country: values.country,
        },
        contactinfo: {
          phone: values.phone,
          email: values.email,
          instagram: values.instagram,
          twitter: values.twitter,
          facebook: values.facebook,
          linkedin: values.linkedin,
        },
        openingHours: values.openingHours,
        images: values.images,
      };
      console.log(data);
    },
  });

  return (
    <div className="py-10 px-5 lg:flex items-center justify-center min-h-screen">
      <div className="lg:max-w-4xl">
        <h1 className="font-bold text-2xl text-center py-2">
          Add New Restaurant
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <Grid container spacing={2}>
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
                  <AddPhotoAlternateIcon className="text-white" />
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
                      src={image.url}
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
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="name"
                label="Restaurant Name"
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
                id="description"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                label="Cuisine Types"
                variant="outlined"
                name="cuisineTypes"
                id="cuisineTypes"
                value={formik.values.cuisineTypes}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                label="Opening Hours"
                variant="outlined"
                name="openingHours"
                id="openingHours"
                value={formik.values.openingHours}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                name="city"
                id="city"
                value={formik.values.city}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                label="State/Province"
                variant="outlined"
                name="stateProvince"
                id="stateProvince"
                value={formik.values.stateProvince}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                label="Postcode"
                variant="outlined"
                name="postcode"
                id="postcode"
                value={formik.values.postcode}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                label="Country"
                variant="outlined"
                name="country"
                id="country"
                value={formik.values.country}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                label="Mobile"
                variant="outlined"
                name="mobile"
                id="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                label="Instagram"
                variant="outlined"
                name="instagram"
                id="instagram"
                value={formik.values.instagram}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                label="Twitter"
                variant="outlined"
                name="twitter"
                id="twitter"
                value={formik.values.twitter}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                label="Facebook"
                variant="outlined"
                name="facebook"
                id="facebook"
                value={formik.values.facebook}
                onChange={formik.handleChange}
              />
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

export default CreateRestaurant;
