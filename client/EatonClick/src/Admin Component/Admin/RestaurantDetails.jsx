import { Button } from "@mui/material";
import React from "react";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import IconButton from "@mui/material/IconButton";
const RestaurantDetails = () => {
  const handleRestauarntStatus = () => {};
  return (
    <div className="lg:px-20 px-5 pb-10">
      <div className="py-5 flex justify-center items-center gap-5">
        <h1 className="text-2xl lg:text-7xl text-center font-bold p-5">
          Restaurant name
        </h1>
        <div>
          <Button
            color={true ? "primary " : "error"}
            className="py-[1rem] px-[2rem]"
            variant="contained"
            onClick={handleRestauarntStatus}
            size="large"
          >
            {true ? "close" : "open"}
          </Button>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title={<span>Restaurant</span>} />
            <CardContent>
              <div className="space-y-5 text-gray-200">
                <div className="flex">
                  <p className="w-48">Owner</p>
                  <p className="">
                    <span className="pr-5">-</span>
                    owner name
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Restaurant name</p>
                  <p className="">
                    <span className="pr-5">-</span>
                    anme
                  </p>
                </div>{" "}
                <div className="flex">
                  <p className="w-48">Cusine type</p>
                  <p className="">
                    <span className="pr-5">-</span>
                    type
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">status</p>
                  <p className="">
                    <span className="pr-5">-</span>
                    {false ? (
                      <span className="px-5 py-2 rounded-full bg-green-500">
                        open
                      </span>
                    ) : (
                      <span className="px-5 py-2 rounded-full bg-red-500">
                        close
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader title={<span>Address</span>} />
            <CardContent>
              <div className="space-y-5 text-gray-200">
                <div className="flex">
                  <p className="w-48">Country</p>
                  <p className="">
                    <span className="pr-5">-</span>
                    country anme
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">City</p>
                  <p className="">
                    <span className="pr-5">-</span>
                    city name
                  </p>
                </div>{" "}
                <div className="flex">
                  <p className="w-48">postcode </p>
                  <p className="">
                    <span className="pr-5">-</span>
                    581343
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Street Address</p>
                  <p className="">
                    <span className="pr-5">-</span>
                    street address
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader title={<span>Contact</span>} />
            <CardContent>
              <div className="space-y-5 text-gray-200">
                <div className="flex">
                  <p className="w-48">Email</p>
                  <p className="">
                    <span className="pr-5">-</span>
                    rrbaleir@gamil.com
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Mobile</p>
                  <p className="">
                    <span className="pr-5">-</span>
                    +91 1234567890
                  </p>
                </div>{" "}
                <div className="flex">
                  <p className="w-48">Social media</p>
                  <p className="">
                    <span className="pr-5">-</span>
                    <IconButton>
                      <InstagramIcon />
                    </IconButton>
                    <IconButton>
                      <TwitterIcon />
                    </IconButton>
                    <IconButton>
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton>
                      <FacebookIcon />
                    </IconButton>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default RestaurantDetails;
