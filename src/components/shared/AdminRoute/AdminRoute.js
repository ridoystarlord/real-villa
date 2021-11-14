import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, isAdminLoading, isAdmin } = useAuth();
  if (isLoading) {
    return (
      <Box sx={{ my: 5 }}>
        <CircularProgress color="success" />
      </Box>
    );
  }
  if (isAdminLoading) {
    return (
      <Box sx={{ my: 5 }}>
        <CircularProgress color="success" />
      </Box>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default AdminRoute;
