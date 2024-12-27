import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Component/State/cart/Action";
import { categorizeIngredients } from "../../Component/util/categorizeingredients";

function MenuCard({ item }) {
  const [selectIngredients, setSelectIngredients] = useState([]);
  const dispatch = useDispatch();

  const handleAddItemToCart = (e) => {
    e.preventDefault();
    const reqData = {
      jwt: localStorage.getItem("jwt"),
      cartitems: {
        foodId: item.id,
        quantity: 1,
        ingredients: selectIngredients,
      },
    };
    console.log("Request Data:", reqData);
    dispatch(addItemToCart(reqData));
  };

  const handleCheckboxChange = (ingredientName) => {
    setSelectIngredients((prevIngredients) =>
      prevIngredients.includes(ingredientName)
        ? prevIngredients.filter((name) => name !== ingredientName)
        : [...prevIngredients, ingredientName]
    );
    console.log("Selected Ingredients:", ingredientName);
  };

  return (
    <Accordion>
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
              alt={`${item.name} image`}
            />
            <div className="space-y-2">
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
          <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
            <p className="font-semibold text-lg">{item.name}</p>
            <p className="text-gray-300 font-semibold">Price: ₹{item.price}</p>
          </div>
        </div>
      </AccordionSummary>

      <AccordionDetails>
        <form onSubmit={handleAddItemToCart}>
          <div className="flex flex-wrap gap-5">
            {Object.entries(categorizeIngredients(item.ingredients)).map(
              ([categoryName, ingredients]) => (
                <div key={categoryName}>
                  {" "}
                  {/* Use unique string keys */}
                  <p className="font-medium mb-2">{categoryName}</p>
                  <FormGroup>
                    {ingredients.map((ingredient) => (
                      <FormControlLabel
                        key={ingredient.name} // Ensure 'name' is unique
                        control={
                          <Checkbox
                            checked={selectIngredients.includes(
                              ingredient.name
                            )}
                            onChange={() =>
                              handleCheckboxChange(ingredient.name)
                            }
                          />
                        }
                        label={ingredient.name}
                      />
                    ))}
                  </FormGroup>
                </div>
              )
            )}
          </div>
          <div>
            <Button
              variant="contained"
              disabled={!item.available}
              type="submit"
            >
              {item.available ? "Add to cart" : "Out of stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
}

export default MenuCard;
