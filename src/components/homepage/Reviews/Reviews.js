import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://warm-coast-92298.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Box style={{ backgroundColor: "#e5eff6" }} sx={{ py: 4, mt: 5 }}>
      <Container>
        <Typography
          className="reviews"
          sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}
          variant="h3"
          gutterBottom
          component="div"
        >
          What Our Client Says
        </Typography>
        <Grid
          sx={{ pb: 3 }}
          container
          spacing={2}
          columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
        >
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
