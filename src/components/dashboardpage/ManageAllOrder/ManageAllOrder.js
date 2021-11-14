import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "./ManageAllOrder.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ManageAllOrder = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    fetch("https://warm-coast-92298.herokuapp.com/order-propertylist")
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);
  const handleDelete = (id) => {
    const procced = window.confirm("Are You Want to cancel this order?");
    if (procced) {
      fetch(`https://warm-coast-92298.herokuapp.com/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order Cancel Successful");
            setOrderList(orderList.filter((order) => order._id !== id));
          }
        });
    }
  };
  const handleApproved = (id) => {
    const newStatus = { status: "shipped" };
    fetch(`https://warm-coast-92298.herokuapp.com/update-order-status/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          fetch("https://warm-coast-92298.herokuapp.com/order-propertylist")
            .then((res) => res.json())
            .then((data) => setOrderList(data));
          alert("Order Status Updated");
        }
      });
  };
  return (
    <Box>
      <Typography
        sx={{ mb: 3, fontWeight: "bold" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        All Orders
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone Number</StyledTableCell>
              <StyledTableCell>Property Name</StyledTableCell>
              <StyledTableCell>Order Status</StyledTableCell>
              <StyledTableCell>Approve Action</StyledTableCell>
              <StyledTableCell>Cancel Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderList.map((row, index) => (
              <StyledTableRow
                key={row.index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell>{row.username}</StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell>{row.phone}</StyledTableCell>
                <StyledTableCell>{row?.property?.propertyName}</StyledTableCell>
                <StyledTableCell>{row.status}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    onClick={() => handleApproved(row._id)}
                    className="approve-btn"
                    sx={{ bgcolor: "success.main" }}
                    variant="contained"
                  >
                    Approved
                  </Button>
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    onClick={() => handleDelete(row._id)}
                    className="delete-btn"
                    sx={{ bgcolor: "error.main" }}
                    variant="contained"
                  >
                    Cancel Order
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageAllOrder;
