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
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
const orders = [1, 1, 1, 1];
const Menutable = () => {
  return (
    <div>
      <Box>
        <Card className="mt-1">
          <CardHeader
            title={"Menu"}
            sx={{ pt: 2, alignItems: "center" }}
            action={
              <IconButton aria-label="settings">
                <CreateIcon />
              </IconButton>
            }
          ></CardHeader>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">image</TableCell>
                  <TableCell align="right">title</TableCell>

                  <TableCell align="right">Ingredients</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">avilablity</TableCell>

                  <TableCell align="right">delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {1}
                    </TableCell>
                    <TableCell align="right">{"images"}</TableCell>
                    <TableCell align="right">{"rrbaleri@gmail.com"}</TableCell>
                    <TableCell align="right">{"$3.99"}</TableCell>
                    <TableCell align="right">{"pizza"}</TableCell>
                    <TableCell align="right">{"cheese"}</TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
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

export default Menutable;
