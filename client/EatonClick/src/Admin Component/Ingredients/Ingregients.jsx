import React from "react";
import Ingredienttable from "./Ingredienttable";
import { Grid } from "@mui/material";
import IngredientsCategorytable from "./IngredientsCategorytable";
function Ingregients() {
  return (
    <div className="px-2">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <Ingredienttable />
        </Grid>
        <Grid item xs={12} lg={8}>
          <IngredientsCategorytable />
        </Grid>
      </Grid>
    </div>
  );
}

export default Ingregients;
