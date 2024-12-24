import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
function Eventscard() {
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardMedia
        sx={{ height: 345 }}
        image="https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <CardContent>
        <Typography variant="h5">Resturant name</Typography>
        <Typography variant="h5">50% offer</Typography>
        <div className="py-2 space-y-2">
          <p>{"location"}</p>
          <p className="text-sm text-blue-500">{"start date"}</p>
          <p className="text-sm text-red-500">{"end date"}</p>
        </div>
      </CardContent>
      {false && (
        <CardActions>
          <IconButton>
            <DeleteIcon></DeleteIcon>
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
}

export default Eventscard;
