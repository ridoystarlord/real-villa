import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import SingleProperty from "../SingleProperty/SingleProperty";
import "./Properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://warm-coast-92298.herokuapp.com/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data), setIsLoading(false));
  }, []);
  return (
    <Box>
      <Header></Header>
      <Box sx={{ py: 4 }} style={{ backgroundColor: "#e5eff6" }}>
        <Container>
          <Typography
            className="best-property"
            sx={{ textAlign: "center", fontWeight: "bold", pb: 2 }}
            variant="h3"
            gutterBottom
            component="div"
          >
            Our Best Property List
          </Typography>
          <Grid
            sx={{ pb: 3 }}
            container
            spacing={2}
            columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          >
            {isLoading ? (
              <Box
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
      <Footer></Footer>
    </Box>
  );
};

export default Properties;
