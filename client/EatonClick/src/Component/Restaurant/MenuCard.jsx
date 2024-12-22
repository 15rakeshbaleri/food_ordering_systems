import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material";

function MenuCard() {
  const ingredients = [
    {
      Category: "nuts&seeds",
      ingredients: ["almonds", "cashew", "peanuts"],
    },
    {
      Category: "Proteins",
      ingredients: ["chicken", "beef", "fish"],
    },
  ];

  return (
    <Accordion>
      {/* Accordion Summary */}
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between w-full">
          {/* Image Section */}
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover rounded-md"
              src="https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Food"
            />
            <div className="space-y-2">
              <p className="font-semibold text-lg">Food Name</p>
              <p className="text-gray-400">
                A delicious food description goes here.
              </p>
            </div>
          </div>
          <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
            <p className="font-semibold text-lg">Food Name</p>
            <p className="text-gray-600">Price: ₹200</p>
          </div>
        </div>
      </AccordionSummary>

      <AccordionDetails>
        <form>
          <div className="flex flex-wrap gap-5">
            {ingredients.map((item, index) => (
              <div key={index}>
                <p className="font-medium mb-2">{item.Category}</p>
                <FormGroup>
                  {item.ingredients.map((ingredient, idx) => (
                    <FormControlLabel
                      key={idx}
                      control={<Checkbox />}
                      label={ingredient}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>
          <div>
            <Button variant="contained" disabled={false} type="submit">
              {true ? "Add to cart" : "out of stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
}

export default MenuCard;
