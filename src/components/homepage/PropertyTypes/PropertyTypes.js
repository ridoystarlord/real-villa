import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import "./PropertyTypes.css";
import { Box } from "@mui/system";

import apartment from "../../../images/property-types/apartment.png";
import office from "../../../images/property-types/office.png";
import private_house from "../../../images/property-types/private-house.png";
import shop from "../../../images/property-types/shop.png";
import townhouse from "../../../images/property-types/townhouse.png";
import villa from "../../../images/property-types/villa.png";

const PropertyTypes = () => {
  return (
    <Container sx={{ my: 3 }}>
      <Typography
        className="property-type"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Types Property
      </Typography>
      <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <Paper elevation={3} style={{ backgroundColor: "#e5eff6" }}>
            <Box sx={{ textAlign: "center", py: 3, height: "180px" }}>
              <img src={apartment} alt="" />
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Apartment
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <Paper elevation={3} style={{ backgroundColor: "#e5eff6" }}>
            <Box sx={{ textAlign: "center", py: 3, height: "180px" }}>
              <img src={office} alt="" />
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Office
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <Paper elevation={3} style={{ backgroundColor: "#e5eff6" }}>
            <Box sx={{ textAlign: "center", py: 3, height: "180px" }}>
              <img src={private_house} alt="" />
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Private House
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <Paper elevation={3} style={{ backgroundColor: "#e5eff6" }}>
            <Box sx={{ textAlign: "center", py: 3, height: "180px" }}>
              <img src={shop} alt="" />
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Shop
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <Paper elevation={3} style={{ backgroundColor: "#e5eff6" }}>
            <Box sx={{ textAlign: "center", py: 3, height: "180px" }}>
              <img src={townhouse} alt="" />
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Town House
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <Paper elevation={3} style={{ backgroundColor: "#e5eff6" }}>
            <Box sx={{ textAlign: "center", py: 3, height: "180px" }}>
              <img src={villa} alt="" />
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Villa
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PropertyTypes;
