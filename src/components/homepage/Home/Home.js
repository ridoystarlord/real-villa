import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import HeroBanner from "../HeroBanner/HeroBanner";
import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import PropertyTypes from "../PropertyTypes/PropertyTypes";
import Reviews from "../Reviews/Reviews";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import SingleProperty from "../SingleProperty/SingleProperty";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import "./Home.css";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://warm-coast-92298.herokuapp.com/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data.slice(0, 6), setIsLoading(false)));
  }, []);
  return (
    <Box>
      <Header></Header>
      <HeroBanner></HeroBanner>
      <PropertyTypes></PropertyTypes>
      <Box sx={{ py: 4, mt: 5 }} style={{ backgroundColor: "#e5eff6" }}>
        <Container>
          <Typography
            className="properties"
            sx={{ textAlign: "center", fontWeight: "bold", pb: 2 }}
            variant="h3"
            gutterBottom
            component="div"
          >
            Properties For Sale
          </Typography>
          <Grid
            sx={{ pb: 3 }}
            container
            spacing={2}
            columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          >
            {isLoading ? (
              <Box
                key="progress"
                sx={{
                  my: 5,
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <CircularProgress color="success" />
              </Box>
            ) : (
              properties.map((property) => (
                <SingleProperty
                  key={property._id}
                  property={property}
                ></SingleProperty>
              ))
            )}
          </Grid>
        </Container>
      </Box>
      <WhyChooseUs></WhyChooseUs>
      <Reviews></Reviews>
      <Footer></Footer>
    </Box>
  );
};

export default Home;
