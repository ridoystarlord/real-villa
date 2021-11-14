import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./HeroBanner.css";
import { NavLink } from "react-router-dom";

const HeroBanner = () => {
  return (
    <Box className="bg-hero-banner">
      <Box className="bg-hero-banner-color">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            flexDirection: "column",
          }}
        >
          <Typography
            className="hero-title"
            sx={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
            }}
            variant="h2"
            component="div"
            gutterBottom
          >
            Find Your Dream
            <br />
            House By Us
          </Typography>
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
            }}
            variant="h6"
            gutterBottom
            component="div"
          >
            We Have Over Million Properties For You
          </Typography>
          <NavLink className="text-decoration-none" to="/properties">
            <Button
              className="explore-btn"
              sx={{
                backgroundColor: "#26ae61",
                borderColor: "#26ae61",
                fontWeight: "bold",
              }}
              variant="contained"
            >
              Explore Properties
            </Button>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroBanner;
