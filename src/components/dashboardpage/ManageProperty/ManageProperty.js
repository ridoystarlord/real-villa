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

const ManageProperty = () => {
  const [propertyList, setPropertyList] = useState([]);
  useEffect(() => {
    fetch("https://warm-coast-92298.herokuapp.com/properties")
      .then((res) => res.json())
      .then((data) => setPropertyList(data));
  }, []);
  const handleDelete = (id) => {
    const procced = window.confirm("Are You Want to delete this Property?");
    if (procced) {
      fetch(`https://warm-coast-92298.herokuapp.com/delete-property/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Property Delete Successful");
            setPropertyList(propertyList.filter((order) => order._id !== id));
          }
        });
    }
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
              <StyledTableCell>Property Name</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
              <StyledTableCell>Property Size</StyledTableCell>
              <StyledTableCell>Bathrooms</StyledTableCell>
              <StyledTableCell>Bedrooms</StyledTableCell>
              <StyledTableCell>Garages</StyledTableCell>
              <StyledTableCell>Delete Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {propertyList.map((row, index) => (
              <StyledTableRow
                key={row.index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell>{row.propertyName}</StyledTableCell>
                <StyledTableCell>{row.price}</StyledTableCell>
                <StyledTableCell>{row.size} sq ft</StyledTableCell>
                <StyledTableCell>{row.bath}</StyledTableCell>
                <StyledTableCell>{row.bedrooms}</StyledTableCell>
                <StyledTableCell>{row.garages}</StyledTableCell>

                <StyledTableCell>
                  <Button
                    onClick={() => handleDelete(row._id)}
                    className="delete-btn"
                    sx={{ bgcolor: "error.main" }}
                    variant="contained"
                  >
                    Delete
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

export default ManageProperty;
