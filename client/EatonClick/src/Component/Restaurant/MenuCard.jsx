import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material";
import { categorizeIngredients } from "../../Component/util/categorizeingredients";

import { useState } from "react";
function MenuCard({ item }) {
  // const ingredients = [
  //   {
  //     Category: "nuts&seeds",
  //     ingredients: ["almonds", "cashew", "peanuts"],
  //   },
  //   {
  //     Category: "Proteins",
  //     ingredients: ["chicken", "beef", "fish"],
  //   },
  // ];

  return (
    <Accordion>
      {/* Accordion Summary */}
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between w-full">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover rounded-md"
              src={item.images[0]}
              alt=""
            />
            <div className="space-y-2">
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
          <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
            <p className="font-semibold text-lg"> {item.name}</p>
            <p className="text-gray-300 font-semibold ">Price: ₹{item.price}</p>
          </div>
        </div>
      </AccordionSummary>

      <AccordionDetails>
        <form>
          <div className="flex flex-wrap gap-5">
            {Object.keys(categorizeIngredients(item.ingredients)).map(
              (Category, index) => (
                <div key={index}>
                  <p className="font-medium mb-2">{Category}</p>
                  <FormGroup>
                    {categorizeIngredients(item.ingredients)[Category].map(
                      (ingredient) => (
                        <FormControlLabel
                          key={ingredient.name}
                          control={
                            <Checkbox
                              onChange={() => handlecheckboxChange(ingredient)}
                            />
                          }
                          label={ingredient.name}
                        />
                      )
                    )}
                  </FormGroup>
                </div>
              )
            )}
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
