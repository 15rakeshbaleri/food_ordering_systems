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
import { useNavigate } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
import { Button, Modal } from "@mui/material";
const FoodCategorytable = () => {
  const navigate = useNavigate();
  const orders = [
    { id: 1, name: "Pizza" },
    { id: 2, name: "Burger" },
    { id: 3, name: "Pasta" },
    { id: 4, name: "Salad" },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Box>
        <Card className="mt-1">
          <CardHeader
            title={"Food Category"}
            sx={{ pt: 2, alignItems: "flex-start" }}
            action={
              <IconButton onClick={handleopen} aria-label="settings">
                <CreateIcon />
              </IconButton>
            }
          ></CardHeader>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">ID</TableCell>
                  <TableCell align="left">Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={2} align="center">
                      No data available.
                    </TableCell>
                  </TableRow>
                ) : (
                  orders.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{row.id}</TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}></Box>
        </Modal>
      </Box>
    </div>
  );
};

export default FoodCategorytable;
