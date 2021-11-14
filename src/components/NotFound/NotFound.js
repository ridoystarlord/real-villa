import { Box } from "@mui/system";
import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import notfound1 from "../../images/notfound/01.png";
import notfound2 from "../../images/notfound/02.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <Box>
      <Header></Header>
      <Container sx={{ my: 5 }}>
        <Grid
          container
          spacing={2}
          columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              className="notfound"
              variant="h1"
              component="div"
              gutterBottom
            >
              404
            </Typography>
            <Typography variant="h4" component="div" gutterBottom>
              Oops – no one seems to be home
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box sx={{ textAlign: "center" }}>
              <img className="mb-5" src={notfound1} alt="" />
              <img className="mt-5 w-100" src={notfound2} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default NotFound;
