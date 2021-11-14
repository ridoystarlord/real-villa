import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

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

const MakeAdmin = () => {
  const { isAdmin } = useAuth();
  const [adminList, setAdminList] = useState([]);
  useEffect(() => {
    fetch("https://warm-coast-92298.herokuapp.com/adminlist")
      .then((res) => res.json())
      .then((data) => setAdminList(data));
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (!isAdmin) {
      alert("You Are Not Admin");
      reset();
      return;
    }
    fetch("https://warm-coast-92298.herokuapp.com/make-admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          fetch("https://warm-coast-92298.herokuapp.com/adminlist")
            .then((res) => res.json())
            .then((data) => setAdminList(data));
          alert("Admin Added Successfully");
          reset();
        }
      });
  };
  return (
    <Box>
      <Grid container spacing={3} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            sx={{ mb: 5, fontWeight: "bold" }}
            variant="h4"
            gutterBottom
            component="div"
          >
            Make a new Admin
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-100 p-2"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-danger">Email is required</span>
              )}
            </p>
            <input
              value="Add"
              className="w-100 signup-btn border-0 rounded-pill p-2 text-white"
              type="submit"
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            sx={{ mb: 5, fontWeight: "bold" }}
            variant="h4"
            gutterBottom
            component="div"
          >
            Admin List
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>No.</StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {adminList.map((row, index) => (
                  <StyledTableRow
                    key={row.username}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell>{row.username}</StyledTableCell>
                    <StyledTableCell>{row.email}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MakeAdmin;
