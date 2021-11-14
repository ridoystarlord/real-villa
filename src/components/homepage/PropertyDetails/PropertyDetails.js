import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import { useForm } from "react-hook-form";
import "./PropertyDetails.css";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faObjectGroup,
  faCar,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory, useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const PropertyDetails = () => {
  const history = useHistory();
  const { user } = useAuth();
  const { id } = useParams();
  const [property, setProperty] = useState([]);

  useEffect(() => {
    fetch(`https://warm-coast-92298.herokuapp.com/property/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data));
  }, [id]);
  const {
    propertyName,
    description,
    price,
    img,
    bath,
    bedrooms,
    garages,
    size,
    buildin,
    amenities,
  } = property;
  const amenitiesList = amenities?.split(",");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.status = "pending";
    data.username = user.displayName;
    data.uid = user.uid;
    data.property = property;
    fetch("https://warm-coast-92298.herokuapp.com/order-property", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Congratulations.\nYou Purchase this house Successfully");
          history.push("/properties");
        }
      });
  };
  return (
    <Box>
      <Header></Header>
      <Container sx={{ my: 5 }}>
        <Grid
          container
          spacing={2}
          columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card>
              <Typography
                sx={{ p: 2, fontWeight: "bold", textAlign: "center" }}
                variant="h4"
                gutterBottom
                component="div"
              >
                {propertyName}
              </Typography>
              <CardMedia component="img" image={img} alt={propertyName} />
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    className="price-color"
                    variant="h4"
                    gutterBottom
                    component="div"
                  >
                    $ {price}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    className="price-color"
                    variant="h6"
                    gutterBottom
                    component="div"
                  >
                    Build in: {buildin}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {description}
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
                    <FontAwesomeIcon
                      className="icon-color"
                      icon={faObjectGroup}
                    />
                    <Typography
                      sx={{ ml: 0.5 }}
                      variant="subtitle2"
                      gutterBottom
                      component="div"
                    >
                      {size}
                    </Typography>
                  </Box>
                </Box>
              </CardActions>
              <CardContent>
                <Typography
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                  variant="h4"
                  gutterBottom
                  component="div"
                >
                  Amenities
                </Typography>
                <Grid
                  container
                  spacing={2}
                  columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                >
                  {amenitiesList?.map((element) => (
                    <Grid key={element} item xs={4} sm={4} md={4} lg={4}>
                      <FontAwesomeIcon
                        className="icon-color me-2"
                        icon={faCheckSquare}
                      />
                      {element}
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper elevation={3} sx={{ p: 5 }}>
              <Typography
                sx={{ mb: 3, fontWeight: "bold" }}
                variant="h4"
                gutterBottom
                component="div"
              >
                Get Free Quote
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <p>
                  <input
                    defaultValue={user.displayName}
                    placeholder="Enter Your Name"
                    className="w-100 p-2"
                    {...register("username", { required: true })}
                  />
                  {errors.username && (
                    <span className="text-danger">Username is required</span>
                  )}
                </p>
                <p>
                  <input
                    defaultValue={user.email}
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-100 p-2"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-danger">Email is required</span>
                  )}
                </p>
                <p>
                  <textarea
                    rows="2"
                    className="w-100 p-2"
                    placeholder="Enter Your Address"
                    {...register("address", { required: true })}
                  />
                  {errors.address && (
                    <span className="text-danger">Address is required</span>
                  )}
                </p>
                <p>
                  <input
                    type="tel"
                    className="w-100 p-2"
                    placeholder="Enter Your Phone Number"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <span className="text-danger">
                      Phone Number is required
                    </span>
                  )}
                </p>
                <input
                  value="Order Now"
                  className="w-100 signup-btn border-0 rounded-pill p-2 text-white"
                  type="submit"
                />
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default PropertyDetails;
