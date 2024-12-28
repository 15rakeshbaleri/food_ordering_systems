import React from "react";
import {
  Grid,
  TextField,
  Button,
  Modal,
  Box,
  Card,
  Divider,
} from "@mui/material";
import CartItem from "./CartItem";
import AddressCard from "./AddressCard";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import * as Yup from "yup";
import { ErrorMessage, Field } from "formik";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createorder } from "../State/Order/Action";

function Cart() {
  const { Cart, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const initialValues = {
    streetAddress: "",
    state: "",
    city: "",
    postalcode: "",
  };

  const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Street address is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    postalcode: Yup.string().required("Postal code is required"),
  });

  const handleSubmit = (values) => {
    const data = {
      jwt: localStorage.getItem("jwt"),
      order: {
        restaurantId: Cart.cartItems[0]?.food.restaurant.id,
        deliveryAddress: {
          fullname: auth.user?.fullname,
          streetAddress: values.streetAddress,
          stateProvince: values.state,
          city: values.city,
          postcode: values.postalcode,
          country: "india",
        },
      },
    };
    dispatch(createorder({ data }));
  };

  const createorder_selectedaddress = () => {};
  const handleopen_addressmodal = () => {
    setOpen(true);
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <main className="lg:flex justify-between">
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-10">
          <div>
            <h1 className="text-2xl font-semibold text-gray-500 tex-2xl py-10">
              Choose delivery address
            </h1>
            <div className="flex gap-5 flex-wrap justify-center">
              {[1, 1, 1, 1].map((item, index) => (
                <AddressCard
                  key={index}
                  handleselectedAddress={createorder_selectedaddress}
                  showButton={true}
                  item={item}
                />
              ))}
              <Card className="flex gap-5 w-64 p-5">
                <AddLocationAltIcon />
                <div className="space-y-3 text-gray-500">
                  <h1 className="font-semibold text-lg text-gray-500">
                    Add Address
                  </h1>
                  <Button variant="outlined" onClick={handleopen_addressmodal}>
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />

        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-5">
          {Cart?.cartItems?.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}

          <Divider />
          <div className="billdetails px-5 text-sm">
            <p className="font-extralight py-5">Bill details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>Rs.{Cart?.cart?.total}</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Delivery Fee</p>
                <p>Rs.53</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Platform Fee</p>
                <p>Rs.7</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>GST and Restaurant charges</p>
                <p>Rs.19</p>
              </div>
              <Divider />
            </div>
            <div className="flex justify-between text-gray-400">
              <p>Total Pay</p>
              <p>Rs.{Cart?.cart?.total + 19 + 53 + 7}</p>
            </div>
          </div>
        </section>
      </main>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="streetAddress"
                      label="Street Address"
                      variant="outlined"
                      fullWidth
                      value={values.streetAddress}
                      error={
                        touched.streetAddress && Boolean(errors.streetAddress)
                      }
                      helperText={touched.streetAddress && errors.streetAddress}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="state"
                      label="State"
                      variant="outlined"
                      fullWidth
                      value={values.state}
                      error={touched.state && Boolean(errors.state)}
                      helperText={touched.state && errors.state}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="city"
                      label="City"
                      variant="outlined"
                      fullWidth
                      value={values.city}
                      error={touched.city && Boolean(errors.city)}
                      helperText={touched.city && errors.city}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="postalcode"
                      label="Postal Code"
                      variant="outlined"
                      fullWidth
                      value={values.postalcode}
                      error={touched.postalcode && Boolean(errors.postalcode)}
                      helperText={touched.postalcode && errors.postalcode}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" type="submit" fullWidth>
                      Deliver here
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
}

export default Cart;
