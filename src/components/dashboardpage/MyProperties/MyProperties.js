import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import {
  faBed,
  faBath,
  faObjectGroup,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../hooks/useAuth";
import "./MyProperties.css";

const MyProperties = () => {
  const { user } = useAuth();
  const [userOrder, setUserOrder] = useState([]);
  useEffect(() => {
    fetch(`https://warm-coast-92298.herokuapp.com/my-orders/${user.uid}`)
      .then((res) => res.json())
      .then((data) => setUserOrder(data));
  }, [user.uid]);
  const handleDelete = (id) => {
    const procced = window.confirm("Are You Want to Delete this order?");
    if (procced) {
      fetch(`https://warm-coast-92298.herokuapp.com/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order Cancel Successful");
            setUserOrder(userOrder.filter((order) => order._id !== id));
          }
        });
    }
  };
  return (
    <div>
      <Typography
        sx={{ fontWeight: "bold" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        My orders
      </Typography>
      <Divider />
      <Grid
        sx={{ my: 3 }}
        container
        spacing={2}
        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
      >
        {userOrder.map((property) => (
          <Grid key={property?._id} item xs={12} sm={12} md={4} lg={4}>
            <Card>
              <Typography
                sx={{ p: 2, fontWeight: "bold", textAlign: "center" }}
                variant="h6"
                gutterBottom
                component="div"
              >
                {property?.property?.propertyName}
              </Typography>
              <CardMedia
                component="img"
                height="194"
                image={property?.property?.img}
                alt={property?.property?.propertyName}
              />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    className="price-color"
                    variant="h4"
                    gutterBottom
                    component="div"
                  >
                    $ {property?.property?.price}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    className={
                      property.status === "shipped"
                        ? "fw-bold text-success"
                        : "fw-bold text-danger"
                    }
                    variant="caption"
                    gutterBottom
                    component="div"
                  >
                    {property.status}
                  </Typography>
                </Box>
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
                      {property?.property?.bedrooms} Beds
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
                      {property?.property?.bath} Baths
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
                      {property?.property?.garages} Garages
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
                      {property?.property?.size} sq ft
                    </Typography>
                  </Box>
                </Box>
                <Button
                  className="delete-btn"
                  onClick={() => handleDelete(property?._id)}
                  sx={{
                    my: 2,
                    backgroundColor: "red",
                    borderColor: "red",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                >
                  Cancel order
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MyProperties;
