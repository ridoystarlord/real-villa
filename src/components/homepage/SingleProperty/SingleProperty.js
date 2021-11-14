import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import "./SingleProperty.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faObjectGroup,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const SingleProperty = (props) => {
  const {
    _id,
    propertyName,
    price,
    img,
    bath,
    bedrooms,
    garages,
    size,
    description,
  } = props.property;
  return (
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <Card>
        <Typography
          sx={{ p: 2, fontWeight: "bold", textAlign: "center" }}
          variant="h6"
          gutterBottom
          component="div"
        >
          {propertyName}
        </Typography>
        <CardMedia
          component="img"
          height="194"
          image={img}
          alt={propertyName}
        />
        <CardContent>
          <Typography
            sx={{ fontWeight: "bold" }}
            className="price-color"
            variant="h4"
            gutterBottom
            component="div"
          >
            $ {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.slice(0, 85)}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <FontAwesomeIcon className="icon-color" icon={faBed} />
              <Typography
                sx={{ ml: 0.5 }}
                variant="subtitle2"
                gutterBottom
                component="div"
              >
                {bedrooms} Beds
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <FontAwesomeIcon className="icon-color" icon={faBath} />
              <Typography
                sx={{ ml: 0.5 }}
                variant="subtitle2"
                gutterBottom
                component="div"
              >
                {bath} Baths
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <FontAwesomeIcon className="icon-color" icon={faCar} />
              <Typography
                sx={{ ml: 0.5 }}
                variant="subtitle2"
                gutterBottom
                component="div"
              >
                {garages} Garages
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <FontAwesomeIcon className="icon-color" icon={faObjectGroup} />
              <Typography
                sx={{ ml: 0.5 }}
                variant="subtitle2"
                gutterBottom
                component="div"
              >
                {size} sq ft
              </Typography>
            </Box>
          </Box>
          <Link
            className="text-decoration-none"
            to={`/property-details/${_id}`}
          >
            <Button
              className="explore-btn"
              sx={{
                my: 2,
                backgroundColor: "#26ae61",
                borderColor: "#26ae61",
                fontWeight: "bold",
              }}
              variant="contained"
            >
              Buy Now
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SingleProperty;
