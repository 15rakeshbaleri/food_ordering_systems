import React from "react";
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
const orders = [1, 1, 1, 1];

const Ingredienttable = () => {
  return (
    <div>
      <Box>
        <Card className="mt-1">
          <CardHeader
            title={"Ingredients"}
            sx={{ pt: 2, alignItems: "flex-start" }}
            action={
              <IconButton aria-label="settings">
                <CreateIcon />
              </IconButton>
            }
          ></CardHeader>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 600 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">id</TableCell>
                  <TableCell align="left">name</TableCell>
                  <TableCell align="left">category</TableCell>
                  <TableCell align="left">Availablity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{"id"}</TableCell>
                    <TableCell align="left">{"name"}</TableCell>
                    <TableCell align="left">{"category"}</TableCell>
                    <TableCell align="left">{"Availablity"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
    </div>
  );
};

export default Ingredienttable;
